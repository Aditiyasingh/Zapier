import "dotenv/config";
import { prisma } from "@repo/db";
import { Kafka } from "kafkajs";
import { sendEmail } from "./mailer.js";
import { asRecord, interpolate } from "./template.js";

const TOPIC_NAME = "zap-event";
const EMAIL_ACTION_NAME = "email";

const kafka = new Kafka({
    clientId: "zapier-worker",
    brokers: (process.env.KAFKA_BROKERS ?? "localhost:9092").split(","),
});

async function runEmailAction(params: {
    actionMetadata: Record<string, unknown>;
    triggerPayload: unknown;
    fallbackTo: string;
}): Promise<void> {
    const to = typeof params.actionMetadata.to === "string" && params.actionMetadata.to.length > 0
        ? interpolate(params.actionMetadata.to, params.triggerPayload)
        : params.fallbackTo;

    const subjectTemplate = typeof params.actionMetadata.subject === "string"
        ? params.actionMetadata.subject
        : "Your Zap has been triggered";
    const bodyTemplate = typeof params.actionMetadata.body === "string"
        ? params.actionMetadata.body
        : `Your Zap fired with this data:\n\n${JSON.stringify(params.triggerPayload, null, 2)}`;

    if (!to) {
        throw new Error("No recipient email address available (no action.metadata.to and zap owner has no email)");
    }

    await sendEmail({
        to,
        subject: interpolate(subjectTemplate, params.triggerPayload),
        text: interpolate(bodyTemplate, params.triggerPayload),
    });
}

async function processZapRun(zapRunId: string): Promise<void> {
    const zapRun = await prisma.zapRun.findUnique({
        where: { id: zapRunId },
        include: {
            zap: {
                include: {
                    user: true,
                    actions: {
                        orderBy: { sortingOrder: "asc" },
                        include: { type: true },
                    },
                },
            },
        },
    });

    if (!zapRun) {
        console.warn(`zapRun ${zapRunId} not found, skipping`);
        return;
    }

    let failed = false;

    for (const action of zapRun.zap.actions) {
        try {
            if (action.type.name.toLowerCase() === EMAIL_ACTION_NAME) {
                await runEmailAction({
                    actionMetadata: asRecord(action.metadata),
                    triggerPayload: zapRun.metadata,
                    fallbackTo: zapRun.zap.user.email,
                });
            } else {
                console.warn(`Unsupported action type "${action.type.name}" on action ${action.id}, skipping`);
            }

            await prisma.task.create({
                data: { runId: zapRun.id, actionId: action.id, status: "success" },
            });
        } catch (err) {
            failed = true;
            const message = err instanceof Error ? err.message : String(err);
            console.error(`Action ${action.id} (${action.type.name}) failed for zapRun ${zapRun.id}:`, message);
            await prisma.task.create({
                data: { runId: zapRun.id, actionId: action.id, status: "failed", error: message },
            });
            break;
        }
    }

    await prisma.zapRun.update({
        where: { id: zapRun.id },
        data: { status: failed ? "failed" : "success" },
    });
}

function parseMessageValue(raw: string): string {
    try {
        const parsed = JSON.parse(raw);
        if (parsed && typeof parsed === "object" && typeof parsed.zapRunId === "string") {
            return parsed.zapRunId;
        }
    } catch {
        // Fall through: older messages on the topic may just be the raw zapRunId string.
    }
    return raw;
}

async function ensureTopicExists() {
    const admin = kafka.admin();
    await admin.connect();
    try {
        await admin.createTopics({ topics: [{ topic: TOPIC_NAME, numPartitions: 1 }] });
    } finally {
        await admin.disconnect();
    }
}

async function main() {
    await ensureTopicExists();

    const consumer = kafka.consumer({ groupId: "email-worker" });
    await consumer.connect();

    await consumer.subscribe({ topic: TOPIC_NAME, fromBeginning: true });

    await consumer.run({
        autoCommit: false,
        eachMessage: async ({ partition, message }) => {
            const raw = message.value?.toString();
            if (!raw) {
                return;
            }

            const zapRunId = parseMessageValue(raw);
            console.log(`Processing zapRun ${zapRunId} (partition ${partition}, offset ${message.offset})`);

            try {
                await processZapRun(zapRunId);
                console.log(`Done processing zapRun ${zapRunId}`);
            } catch (err) {
                // Don't let one bad message crash the whole consumer; it's logged and skipped.
                console.error(`Unexpected error processing zapRun ${zapRunId}:`, err);
            }

            await consumer.commitOffsets([{
                topic: TOPIC_NAME,
                partition,
                offset: (parseInt(message.offset, 10) + 1).toString(),
            }]);
        },
    });

    const shutdown = async () => {
        console.log("Shutting down worker...");
        await consumer.disconnect();
        process.exit(0);
    };
    process.on("SIGINT", shutdown);
    process.on("SIGTERM", shutdown);
}

main().catch((err) => {
    console.error("Worker crashed:", err);
    process.exit(1);
});

import { prisma } from "@repo/db";
import { Kafka } from "kafkajs";

const TOPIC_NAME = "zap-event";
const kafka = new Kafka({
    clientId: "zapier",
    brokers: (process.env.KAFKA_BROKERS ?? "localhost:9092").split(","),
})

async function main() {
    const producer = kafka.producer();
    await producer.connect();

    while (1) {
        const pendingrows = await prisma.zapRunoutbox.findMany({
            where: {},
            take: 10
        });

        if (pendingrows.length > 0) {
            await producer.send({
                topic: TOPIC_NAME,
                messages: pendingrows.map((r) => {
                    // kafkajs needs the message value as a string/Buffer, so we
                    // wrap the outbox row in JSON to leave room for more fields later.
                    return { value: JSON.stringify({ zapRunId: r.zapRunId }) }
                })
            });

            console.log(`Batch of ${pendingrows.length} sent to worker`);

            await prisma.zapRunoutbox.deleteMany({
                where: {
                    id: {
                        in: pendingrows.map((r) => r.id)
                    }
                }
            });
        }

        // Always wait 3 seconds before checking the database again,
        // regardless of whether we found data or not.
        await new Promise(r => setTimeout(r, 3000));
    }
}
main().catch((e) => {
    console.error("Processor crashed:", e);
    process.exit(1);
});

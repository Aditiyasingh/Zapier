import { prisma } from "../src/prisma.js";

async function main() {
    await prisma.availableTrigger.upsert({
        where: { name: "webhook" },
        update: {},
        create: { name: "webhook" },
    });

    await prisma.availableAction.upsert({
        where: { name: "email" },
        update: {},
        create: { name: "email" },
    });

    console.log("Seed complete: webhook trigger + email action available");
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });

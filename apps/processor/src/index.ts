import {Prisma} from "./lib/prisma.js";
import {Kafka} from "kafkajs" ;

const kafka = new Kafka({
    clientId:"zapier",
    brokers:["localhost:9092"]
})
async function main(){
    const producer = kafka.producer();
    await producer.connect();
    
    while(1){
        const pendingrows = await Prisma.zapRunoutbox.findMany({
            where:{},
            take:10
        });

    
        if (pendingrows.length > 0) {
            await producer.send({
                topic:"zap-event",
                messages: pendingrows.map((r: { zapRunId: any; }) => { //understand this line
                    return { value: r.zapRunId }
                })
            });

            // Moved inside the block so it only logs when data is actually sent
            console.log(`Batch of ${pendingrows.length} sent to worker`);

            await Prisma.zapRunoutbox.deleteMany({
                where:{
                    id:{
                        in: pendingrows.map((r: { id: any; }) => r.id)//understand this line
                    }
                }
            });
        }

        // Always wait 3 seconds before checking the database again, 
        // regardless of whether we found data or not.
        await new Promise(r => setTimeout(r, 3000));
    }
}
main();

import express from "express"
import { prisma } from "@repo/db"

const app =express();
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Your Webhook Server is LIVE and ready aditya is here!");
});
app.post("/hooks/catch/:userId/:zapId", async (req,res) =>{
    console.log("Raw body received:", req.body);
    const zapId = req.params.zapId;
    const body =req.body;

    console.log("reached here");
    try {
        //store in db a new trigger
        await prisma.$transaction(async tx =>{
            const run = await tx.zapRun.create({
                data: {
                    zapId: zapId,
                    metadata: body,
                }
            })
            await tx.zapRunoutbox.create({
                data: {
                    zapRunId: run.id,
                    metadata: body,
                }
            })
        })

        res.json({
            message: "hello there"
        })
    } catch (e) {
        console.error("Failed to record zap run:", e);
        res.status(500).json({
            message: "Failed to process webhook"
        })
    }
})
app.listen(3001, () => {
    console.log("Webhook server listening on port 3001");
});

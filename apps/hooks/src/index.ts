import express from "express"
import {Prisma} from "./lib/prisma.js"

const app =express();
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Your Webhook Server is LIVE and ready aditya is here!");
});
app.post("/hooks/catch/:userId/:zapId", async (req,res) =>{
    console.log("Raw body received:", req.body);
    const userId =req.params.userId;
    const zapId = req.params.zapId;
    const body =req.body;
    
    console.log("reached here");
    //store in db a new trigger
    await Prisma.$transaction(async tx =>{
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
})
app.listen(3001)
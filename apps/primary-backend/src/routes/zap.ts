import {Router} from "express";
import { ZapCreateSchema } from "../types/index.js";
import { prisma } from "../db/index.js";
import { authMiddleware } from "../middleware.js";

const router = Router();

router.post("/", authMiddleware, async (req, res) => {
    //@ts-ignore
    const id: number =req.id;
    const body = req.body;
    const parsedData= ZapCreateSchema.safeParse(body);

        if (!parsedData.success){
            return res.status(400).json({
                message:"invalid input"
            })
        }
        const zapId = await prisma.$transaction(async (tx) =>{
            const zap = await tx.zap.create({
            data:{
                userId: id,
                actions:{
                    create: parsedData.data.action.map((x,index)=> ({
                        ActionName: x.AvailableActionId,
                        sortingOrder: index,
                        metadata: x.actionMetadata
                    }))
                }
            }
        })
        await tx.trigger.create({
            data:{
                 triggerId: parsedData.data.AvailableTriggerId,
                 zapId: zap.id,
                 metadata: parsedData.data.triggerMetadata
            }
        })
         return zap.id;
    })
    return res.json({
        zapId
    })
})

router.get("/", authMiddleware ,async (req, res) => {
    //@ts-ignore
    const id = req.id;
    const zaps = await prisma.zap.findMany({
        where:{
            userId: id
        },
        include:{
            actions: {
                include:{
                    type: true
                }
            },
            trigger:{
                include:{
                    type: true
                }
            }

        }
    })
    res.json({
        zaps
    })

})
router.get("/zapId", authMiddleware ,async (req, res) => {

    //@ts-ignore
    const id = req.id;
    const zapId = req.query.zapId as string;

    const zap = await prisma.zap.findFirst({
        where:{
            userId: id,
            id: zapId
        },
        include:{
            actions: {
                include:{
                    type: true
                }
            },
            trigger:{
                include:{
                    type: true
                }
            }

        }
    })
    res.json({
        zap
    })


})

export const zapRouter = router;

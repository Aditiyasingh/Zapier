import {Router} from "express";
import { SignupSchema, ZapCreateSchema } from "../types";
import { Prisma } from "../lib/prisma";
import { authMiddleware } from "../middleware";

const router = Router();

router.post("/", async (req, res) => {
    //@ts-ignore
    const id: string =req.id;
    const body = req.body;
    const parsedData= ZapCreateSchema.safeParse(body);

        if (!parsedData.success){   
            return res.status(400).json({
                message:"invalid input"
            })
        }
        const zapId = await Prisma.$transaction(async (tx : any ) =>{
            const zap = await tx.zap.create({
            data:{
                userId: parseInt(id),
                triggerid: "",
                Action:{
                    create: parsedData.data.action.map((x,index)=> ({
                        ActionName: x.AvailableActionId,
                        sortingOrder: index
                    }))
                }
            }
        })
        const trigger =await tx.trigger.create({
            data:{
                 trigger: parsedData.data.AvailableTriggerId,
                 zapId: zap.id
            }
        })
        await Prisma.zap.update({
            where:{
                id: zap.id
            },
            data:{
                trigger: trigger.id
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
    const zaps = await Prisma.zap.findMany({
        where:{
            userId: id
        },
        include:{
            Action: {
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

    const zap = await Prisma.zap.findFirst({
        where:{
            userId: id,
            id: zapId
        },
        include:{
            Action: {
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
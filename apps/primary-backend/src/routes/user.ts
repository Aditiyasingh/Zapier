import {Router} from "express";
import { SigninSchema, SignupSchema } from "../types";
import { Prisma } from "../lib/prisma";
import { authMiddleware } from "../middleware";
import { JWT_PASSWORD } from "../config";
import jwt from "jsonwebtoken";


const router = Router();


router.post("/signup", async (req, res) => {
    const body = req.body;
    const parsedData =SignupSchema.safeParse(body);

    if (!parsedData.success){
        return res.status(411).json({
            message: "Incorect data",
        })
    }
    const userExists = await Prisma.user.findFirst({
        where:{
            email: parsedData.data.username
        }
    })

    if (userExists){
        return res.status(403).json({
            message: "User already exists"
        })
    }
    await Prisma.user.create({
        data:{
            email: parsedData.data.username,
            password: parsedData.data.password,
            name: parsedData.data.name
        }
    })
    return res.status(200).json({
        message: "Please verify your email"
    })
})

router.post("/signin", async (req, res) => {
    const body =req.body;
    const parsedData = SigninSchema.safeParse(body);

    if(!parsedData.success){
        return res.status(411).json({
            message: "Incorrect data"
        })
    }
     
    const user =  await Prisma.user.findFirst({
        where:{
            email: parsedData.data.username,
            password: parsedData.data.password
        }
    })
    
    if(!user){
        return res.status(403).json({
            message: "Invalid credentials"
        })
    }

    //Sign a JWT token

    const token = jwt.sign({
        id: user.id,
    }, JWT_PASSWORD);

    res.json({
        token: token,
    })
    
})
router.get("/", authMiddleware ,async (req, res) => {
    //@ts-ignore
    const id = req.id;
    const user =await Prisma.user.findFirst({
        where:{
            id: id
        },
        select: {
            name: true,
            email: true,
        }
    }) 

    return res.json({
        user
    })
})

export const userRouter = router;
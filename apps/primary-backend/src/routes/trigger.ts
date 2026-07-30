
import { Router } from "express";
import { Prisma } from "../lib/prisma";

const router = Router();

router.get("/available", async (req, res) => {
    const availableTriggers = await Prisma.availableTrigger.findMany({});
    res.json({
        availableTriggers
    })
});

export const triggerRouter = router;
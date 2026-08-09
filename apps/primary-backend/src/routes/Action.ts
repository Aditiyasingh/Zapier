

import { Router } from "express";
import { prisma } from "../db/index.js";

const router = Router();

router.get("/available", async (req, res) => {
    const availableActions = await prisma.availableAction.findMany({});
    res.json({
        availableActions
    })
});

export const actionRouter = router;
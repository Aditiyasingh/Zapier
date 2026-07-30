

import { Router } from "express";
import { Prisma } from "../lib/prisma";

const router = Router();

router.get("/available", async (req, res) => {
    const availableActions = await Prisma.availableAction.findMany({});
    res.json({
        availableActions
    })
});

export const actionRouter = router;
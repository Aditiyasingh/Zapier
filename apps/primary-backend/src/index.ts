import "dotenv/config";
import express from "express";
import { userRouter } from "./routes/user.js";
import { zapRouter } from "./routes/zap.js";
import cors from "cors";
import { triggerRouter } from "./routes/trigger.js";
import { actionRouter } from "./routes/Action.js";


const app = express();


app.use(express.json());
app.use(cors());

app.use("/api/v1/user", userRouter);

app.use("/api/v1/zap", zapRouter);

app.use("/api/v1/trigger", triggerRouter);

app.use("/api/v1/action", actionRouter);

app.listen(3000);

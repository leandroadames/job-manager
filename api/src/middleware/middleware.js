import express from "express";
import cors from "cors";
import userRouter from "../routes/userRouter.js";
import { hashPasswordMiddleware } from "../utils/auth.js";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/api/signup", hashPasswordMiddleware, signUpRouter);
app.use("/api/users", userRouter);

export default app;

import express from "express";
import { createFile } from "../controllers/filesController.js";
const router = express.Router();

router.post("/", createFile);

export default router;

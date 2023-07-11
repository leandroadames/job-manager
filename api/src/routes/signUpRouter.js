import express from "express";
import { createUser } from "../controllers/signUpController.js";
const router = express.Router();

router.get("/", createUser);

export default router;

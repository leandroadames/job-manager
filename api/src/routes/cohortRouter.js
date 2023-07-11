import express from "express";
import { createCohort } from "../controllers/cohortController.js";
const router = express.Router();

router.post("/", createCohort);

export default router;

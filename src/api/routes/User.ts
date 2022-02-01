import express from "express";
import { getData, signup, login } from "../controllers/User.controller";

const router = express.Router();

router.get("/:email", getData);
router.post("/signup", signup);
router.post("/login", login);

export default router;

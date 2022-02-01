import express from "express";
import { get, create, update } from "../controllers/Detail.controller";

const router = express.Router();

router.get("/:email", get);
router.post("/", create);
router.put("/:id", update);

export default router;

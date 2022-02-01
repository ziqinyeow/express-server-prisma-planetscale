import express from "express";
import { get, create, update } from "../controllers/News.controller";

const router = express.Router();

router.get("/", get);
router.post("/", create);
router.put("/:id", update);

export default router;

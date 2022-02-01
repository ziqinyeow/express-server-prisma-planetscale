import express from "express";
import {
  getAll,
  getSpecific,
  create,
  update,
} from "../controllers/Task.controller";

const router = express.Router();

router.post("/", create);
router.get("/", getAll);
router.get("/:id", getSpecific);
router.put("/:id", update);

export default router;

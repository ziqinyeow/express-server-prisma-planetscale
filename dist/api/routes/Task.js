"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Task_controller_1 = require("../controllers/Task.controller");
const router = express_1.default.Router();
router.post("/", Task_controller_1.create);
router.get("/", Task_controller_1.getAll);
router.get("/:id", Task_controller_1.getSpecific);
router.put("/:id", Task_controller_1.update);
exports.default = router;
//# sourceMappingURL=Task.js.map
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const News_controller_1 = require("../controllers/News.controller");
const router = express_1.default.Router();
router.get("/", News_controller_1.get);
router.post("/", News_controller_1.create);
router.put("/:id", News_controller_1.update);
exports.default = router;
//# sourceMappingURL=News.js.map
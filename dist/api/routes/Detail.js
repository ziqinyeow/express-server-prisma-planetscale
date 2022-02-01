"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Detail_controller_1 = require("../controllers/Detail.controller");
const router = express_1.default.Router();
router.get("/:email", Detail_controller_1.get);
router.post("/", Detail_controller_1.create);
router.put("/:id", Detail_controller_1.update);
exports.default = router;
//# sourceMappingURL=Detail.js.map
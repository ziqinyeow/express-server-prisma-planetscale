"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const User_controller_1 = require("../controllers/User.controller");
const router = express_1.default.Router();
router.get("/:email", User_controller_1.getData);
router.post("/signup", User_controller_1.signup);
router.post("/login", User_controller_1.login);
exports.default = router;
//# sourceMappingURL=User.js.map
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = exports.signup = exports.getData = void 0;
const jwt_1 = require("../../lib/jwt");
const prisma_1 = require("../../lib/prisma");
const getData = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email } = req.params;
    try {
        const data = yield prisma_1.prisma.user.findUnique({
            where: {
                email,
            },
            select: {
                id: true,
                name: true,
                email: true,
                password: false,
                detail: true,
            },
        });
        res.status(200).json({ data, message: "ok" });
    }
    catch (e) {
        res.status(400).json({ message: "Unable to find user data" });
    }
});
exports.getData = getData;
const signup = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    const token = (0, jwt_1.generateAccessToken)(email);
    try {
        yield prisma_1.prisma.user.create({
            data: {
                email,
                password,
                name: req.body.name && "",
                token,
            },
        });
        return res.status(200).json({ message: "ok" });
    }
    catch (e) {
        return res.status(400).json({ message: "User created previously" });
    }
});
exports.signup = signup;
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    try {
        const user = yield prisma_1.prisma.user.findUnique({
            where: {
                email,
            },
        });
        if ((user === null || user === void 0 ? void 0 : user.password) === password) {
            return res
                .status(200)
                .json({
                verified: true,
                token: user === null || user === void 0 ? void 0 : user.token,
                message: "User login successfully",
            });
        }
        return res
            .status(200)
            .json({ verified: false, message: "User login unsuccessfully" });
    }
    catch (e) {
        return res.status(400).json({ message: "user created" });
    }
});
exports.login = login;
//# sourceMappingURL=User.controller.js.map
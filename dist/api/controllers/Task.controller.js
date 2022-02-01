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
exports.update = exports.create = exports.getSpecific = exports.getAll = void 0;
const prisma_1 = require("../../lib/prisma");
const getAll = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email } = req.body;
    try {
        const data = yield prisma_1.prisma.user.findUnique({
            where: {
                email,
            },
            include: {
                detail: true,
            },
        });
        res.status(200).json({ data, message: "ok" });
    }
    catch (e) {
        res.status(400).json({ message: "Unable to find user data" });
    }
});
exports.getAll = getAll;
const getSpecific = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const data = yield prisma_1.prisma.task.findUnique({
            where: {
                id,
            },
        });
        res.status(200).json({ data, message: "ok" });
    }
    catch (e) {
        res.status(400).json({ message: "Unable to find user data" });
    }
});
exports.getSpecific = getSpecific;
const create = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, description } = req.body;
    try {
        const data = yield prisma_1.prisma.task.create({
            data: {
                name,
                description,
            },
        });
        res.status(200).json({ data, message: "ok" });
    }
    catch (e) {
        res.status(400).json({ message: "Unable to find user data" });
    }
});
exports.create = create;
const update = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { name, description } = req.body;
    try {
        const data = yield prisma_1.prisma.task.update({
            where: {
                id,
            },
            data: {
                name,
                description,
            },
        });
        res.status(200).json({ data, message: "ok" });
    }
    catch (e) {
        res.status(400).json({ message: "Unable to find user data" });
    }
});
exports.update = update;
//# sourceMappingURL=Task.controller.js.map
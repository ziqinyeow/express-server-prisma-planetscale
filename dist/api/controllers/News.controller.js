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
exports.update = exports.create = exports.get = void 0;
const prisma_1 = require("../../lib/prisma");
const get = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield prisma_1.prisma.news.findMany();
        res.status(200).json({ data, message: "ok" });
    }
    catch (e) {
        res.status(400).json({ message: "Unable to find user detail data" });
    }
});
exports.get = get;
const create = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { title, text } = req.body;
    try {
        const data = yield prisma_1.prisma.news.create({
            data: {
                title,
                text,
            },
        });
        res.status(200).json({ data, message: "ok" });
    }
    catch (e) {
        res.status(400).json({ message: "Unable to create user detail data" });
    }
});
exports.create = create;
const update = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { title, text } = req.body;
    try {
        const data = yield prisma_1.prisma.news.update({
            where: {
                id,
            },
            data: { title, text },
        });
        res.status(200).json({ data, message: "ok" });
    }
    catch (e) {
        res.status(400).json({ message: "Unable to update user detail data" });
    }
});
exports.update = update;
//# sourceMappingURL=News.controller.js.map
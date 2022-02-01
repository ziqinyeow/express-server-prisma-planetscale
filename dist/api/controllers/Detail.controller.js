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
    const { email } = req.params;
    try {
        const data = yield prisma_1.prisma.user
            .findUnique({
            where: {
                email,
            },
        })
            .detail();
        res.status(200).json({ data, message: "ok" });
    }
    catch (e) {
        res.status(400).json({ message: "Unable to find user detail data" });
    }
});
exports.get = get;
const create = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, temperature, blood_pressure, pulse_rate, hemoglobin, hematocrit, white_cell, platelet, } = req.body;
    try {
        const data = yield prisma_1.prisma.detail.create({
            data: {
                temperature,
                blood_pressure,
                pulse_rate,
                hemoglobin,
                hematocrit,
                white_cell,
                platelet,
                user: {
                    connect: {
                        email,
                    },
                },
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
    const { temperature, blood_pressure, pulse_rate, hemoglobin, hematocrit, white_cell, platelet, } = req.body;
    try {
        const data = yield prisma_1.prisma.detail.update({
            where: {
                id,
            },
            data: {
                temperature,
                blood_pressure,
                pulse_rate,
                hemoglobin,
                hematocrit,
                white_cell,
                platelet,
            },
        });
        res.status(200).json({ data, message: "ok" });
    }
    catch (e) {
        res.status(400).json({ message: "Unable to update user detail data" });
    }
});
exports.update = update;
//# sourceMappingURL=Detail.controller.js.map
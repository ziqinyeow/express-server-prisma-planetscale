import { Request, Response } from "express";
import { prisma } from "../../lib/prisma";

export const get = async (req: Request, res: Response) => {
  const { email } = req.params;
  try {
    const data = await prisma.user
      .findUnique({
        where: {
          email,
        },
      })
      .detail();
    res.status(200).json({ data, message: "ok" });
  } catch (e) {
    res.status(400).json({ message: "Unable to find user detail data" });
  }
};
export const create = async (req: Request, res: Response) => {
  const {
    email,
    temperature,
    blood_pressure,
    pulse_rate,
    hemoglobin,
    hematocrit,
    white_cell,
    platelet,
  } = req.body;
  try {
    const data = await prisma.detail.create({
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
  } catch (e) {
    res.status(400).json({ message: "Unable to create user detail data" });
  }
};
export const update = async (req: Request, res: Response) => {
  const { id } = req.params;
  const {
    temperature,
    blood_pressure,
    pulse_rate,
    hemoglobin,
    hematocrit,
    white_cell,
    platelet,
  } = req.body;
  try {
    const data = await prisma.detail.update({
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
  } catch (e) {
    res.status(400).json({ message: "Unable to update user detail data" });
  }
};

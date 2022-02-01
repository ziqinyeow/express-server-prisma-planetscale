import { Request, Response } from "express";
import { prisma } from "../../lib/prisma";

export const getAll = async (req: Request, res: Response) => {
  const { email } = req.body;
  try {
    const data = await prisma.user.findUnique({
      where: {
        email,
      },
      include: {
        detail: true,
      },
    });
    res.status(200).json({ data, message: "ok" });
  } catch (e) {
    res.status(400).json({ message: "Unable to find user data" });
  }
};

export const getSpecific = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const data = await prisma.task.findUnique({
      where: {
        id,
      },
    });
    res.status(200).json({ data, message: "ok" });
  } catch (e) {
    res.status(400).json({ message: "Unable to find user data" });
  }
};

export const create = async (req: Request, res: Response) => {
  const { name, description } = req.body;

  try {
    const data = await prisma.task.create({
      data: {
        name,
        description,
      },
    });
    res.status(200).json({ data, message: "ok" });
  } catch (e) {
    res.status(400).json({ message: "Unable to find user data" });
  }
};

export const update = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { name, description } = req.body;

  try {
    const data = await prisma.task.update({
      where: {
        id,
      },
      data: {
        name,
        description,
      },
    });
    res.status(200).json({ data, message: "ok" });
  } catch (e) {
    res.status(400).json({ message: "Unable to find user data" });
  }
};

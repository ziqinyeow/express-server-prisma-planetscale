import { Request, Response } from "express";
import { prisma } from "../../lib/prisma";

export const get = async (req: Request, res: Response) => {
  try {
    const data = await prisma.news.findMany();
    res.status(200).json({ data, message: "ok" });
  } catch (e) {
    res.status(400).json({ message: "Unable to find user detail data" });
  }
};
export const create = async (req: Request, res: Response) => {
  const { title, text } = req.body;
  try {
    const data = await prisma.news.create({
      data: {
        title,
        text,
      },
    });
    res.status(200).json({ data, message: "ok" });
  } catch (e) {
    res.status(400).json({ message: "Unable to create user detail data" });
  }
};
export const update = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { title, text } = req.body;
  try {
    const data = await prisma.news.update({
      where: {
        id,
      },
      data: { title, text },
    });
    res.status(200).json({ data, message: "ok" });
  } catch (e) {
    res.status(400).json({ message: "Unable to update user detail data" });
  }
};

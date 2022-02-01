import { Request, Response } from "express";
import { generateAccessToken } from "../../lib/jwt";
import { prisma } from "../../lib/prisma";

export const getData = async (req: Request, res: Response) => {
  const { email } = req.params;

  try {
    const data = await prisma.user.findUnique({
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
  } catch (e) {
    res.status(400).json({ message: "Unable to find user data" });
  }
};

export const signup = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const token = generateAccessToken(email);
  try {
    await prisma.user.create({
      data: {
        email,
        password,
        name: req.body.name && "",
        token,
      },
    });
    return res.status(200).json({ message: "ok" });
  } catch (e) {
    return res.status(400).json({ message: "User created previously" });
  }
};

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  try {
    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });
    if (user?.password === password) {
      return res
        .status(200)
        .json({
          verified: true,
          token: user?.token,
          message: "User login successfully",
        });
    }

    return res
      .status(200)
      .json({ verified: false, message: "User login unsuccessfully" });
  } catch (e) {
    return res.status(400).json({ message: "user created" });
  }
};

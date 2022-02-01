import jwt from "jsonwebtoken";

export const generateAccessToken = (email: string) => {
  return jwt.sign(email, process.env.TOKEN_SECRET);
};

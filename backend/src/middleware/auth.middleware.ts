import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

if (!process.env.JWT_TOKEN) {
  throw new Error("There is no jwt token in env");
}
const jwt_token = process.env.JWT_TOKEN;

export const authMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const authHeader = req.headers.authorization;
  if (!authHeader)
    return res.status(401).json({ message: "There is no token" });

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, jwt_token) as any;
    (req as any).userId = decoded.userId;
    next();
  } catch {
    res.status(401).json({ message: "Invalid token" });
  }
};

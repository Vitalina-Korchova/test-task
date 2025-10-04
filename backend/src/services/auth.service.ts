import bcrypt from "bcrypt";
import { prisma } from "../prisma/client";
import jwt from "jsonwebtoken";

if (!process.env.JWT_TOKEN) {
  throw new Error("There is no jwt token in env");
}
const jwt_token = process.env.JWT_TOKEN;

export const signUpUser = async (
  name: string,
  email: string,
  password: string
) => {
  const hashPassword = await bcrypt.hash(password, 10);
  const user = await prisma.user.create({
    data: {
      name,
      email,
      password: hashPassword,
    },
  });
  const userExist = await prisma.user.findUnique({
    where: {
      email,
    },
  });
  if (userExist) throw new Error("User already exist");
  return { id: user.id, name: user.name, email: user.email };
};

export const signInUser = async (email: string, password: string) => {
  const userWithEmail = await prisma.user.findUnique({
    where: {
      email,
    },
  });
  if (!userWithEmail) throw new Error("User was not found");
  const checkUserPassword = await bcrypt.compare(
    password,
    userWithEmail.password
  );

  if (!userWithEmail || !checkUserPassword)
    throw new Error("Invalid email or password!");

  const token = jwt.sign(
    { userId: userWithEmail.id, email: userWithEmail.email },
    jwt_token,
    { expiresIn: "1h" }
  );

  return { token, id: userWithEmail.id, email: userWithEmail.email };
};

import { signInUser, signUpUser } from "../services/auth.service";
import { Request, Response } from "express";

interface SignUpBody {
  name: string;
  email: string;
  password: string;
}

export const SignUp = async (
  req: Request<{}, {}, SignUpBody>,
  res: Response
) => {
  try {
    const { name, email, password } = req.body;
    const user = await signUpUser(name, email, password);
    res.json(user);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const SignIn = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const data = await signInUser(email, password);
    res.json(data);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

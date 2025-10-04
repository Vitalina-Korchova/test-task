import express from "express";
import cors from "cors";
import authRes from "./routes/auth.routes";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/auth", authRes);
app.use("/recipes", authRes);
export default app;

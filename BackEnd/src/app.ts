import express, { Request, Response } from "express";
import cors from "cors";
const PORT: number = 3000;
const app = express();

app.use(express.json());

import authRoute from "./routes/auth.routes";
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  }),
);

app.use(express.json());

app.use(authRoute);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello Express TS");
});

app.listen(PORT, () => {
  console.log(`Start server: http://localhost:${PORT}`);
});

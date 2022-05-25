import express, { Express, Request, Response } from "express";

const app: Express = express();
const PORT: number = process.env.PORT ? +process.env.PORT : 4000;

app.get("/", (req: Request, res: Response) => {
  res.send("Express + Typescript + Docker");
});

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
});

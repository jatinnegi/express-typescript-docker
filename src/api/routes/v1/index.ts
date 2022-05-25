import express, { Router, Request, Response } from "express";

const router: Router = express.Router();

router.get("/", (_: Request, res: Response) => {
  res.send("Express + Typescript + Docker");
});

export default router;

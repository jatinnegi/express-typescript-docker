import express, { Express } from "express";
import routes from "../api/routes/v1";

const app: Express = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/v1", routes);

export default app;

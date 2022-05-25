import app from "./config/express";
import connectDb from "./config/mongoose";

const PORT: number = process.env.PORT ? +process.env.PORT : 8090;

connectDb();

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
});

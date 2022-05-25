import app from "./config/express";

const PORT: number = process.env.PORT ? +process.env.PORT : 4000;

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
});

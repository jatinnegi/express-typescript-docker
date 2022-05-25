import path from "path";

// import .env variables
import("dotenv-safe").then((d) => {
  d.config({
    path: path.join(__dirname, "../../.env"),
    example: path.join(__dirname, "../../.env.example"),
  });
});

const env = process.env.NODE_ENV;
const port = process.env.PORT;
const jwtSecret = process.env.JWT_SECRET;
const jwtExpirationInterval = process.env.JWT_EXPIRATION_MINUTES;
const mongo = {
  uri: process.env.MONGO_URI,
};
const logs = process.env.NODE_ENV === "production" ? "combined" : "dev";

export { env, port, jwtSecret, jwtExpirationInterval, mongo, logs };

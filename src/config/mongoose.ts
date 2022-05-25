import mongoose from "mongoose";
import { mongo, env } from "./vars";

// set mongoose Promise to Bluebird
mongoose.Promise = Promise;

// Exit application on error
mongoose.connection.on("error", (err) => {
  console.error(`MongoDB connection error: ${err}`);
  process.exit(-1);
});

// print mongoose logs in dev env
if (env === "development") {
  mongoose.set("debug", true);
}

/**
 * Connect to mongo db
 *
 * @returns {object} Mongoose connection
 * @public
 */
function connectDb() {
  const options: mongoose.ConnectOptions = {
    useCreateIndex: true,
    keepAlive: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  };
  mongoose.connect(mongo.uri || "", options);
  return mongoose.connection;
}

export default connectDb;

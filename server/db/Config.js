import mongoose from "mongoose";
import session from "express-session";
import MongoDBSession from "connect-mongodb-session";
import env from "custom-env";
env.env();
const environment = process.env.NODE_ENV;
const db =
  environment === "dev" ? process.env.DEV_DB : process.env.PRODUCTION_DB;

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    });
  } catch (err) {
    throw new InternalError(`Could Not Connect To Mongo: ${err.message}`);
  }
};

const setupSession = () => {
  const dbStore = MongoDBSession(session);
  const store = new dbStore({
    uri: db,
    collection: "sessions",
  });

  store.on("error", function (error) {
    throw new InternalError(
      `Could Not Create Mongo Session Store: ${err.message}`
    );
  });

  return store;
};

export { connectDB, setupSession };

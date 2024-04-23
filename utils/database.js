import mongoose from "mongoose";

let isConnected = false; // track the connection

export const connectToDB = async () => {
  mongoose.set("strictQuery", true);

  if (isConnected) {
    console.log("MongoDB is already connected");
    return;
  }

  try {
    console.log("connecting to db");
    delete mongoose.connection.models["User"];
    await mongoose.connect(
      process.env.NODE_ENV == "production"
        ? process.env.MONGO_URI
        : process.env.MONGO_LOCAL_URI,
      {
        dbName: process.env.DB_NAME,
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );

    isConnected = true;

    console.log("MongoDB connected");
  } catch (error) {
    console.log(error);
  }
};

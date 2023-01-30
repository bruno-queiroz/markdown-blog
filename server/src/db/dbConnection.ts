import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export const connectToDB = () => {
  mongoose.connect(process.env.MONGO_ACCESS!, (err) => {
    if (err) {
      console.log(err);
    }

    console.log("connected to the database");
  });
};

import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectDB = async () => {
  try {
    const mongoURI = process.env.MONGO_URI;
    if (!mongoURI) {
      throw new Error("MONGO_URI is not defined in the environment variables.");
    }

    const conn = await mongoose.connect(mongoURI);

    console.log(`MongoDB Connected: ${conn.connection.port}`);
  } catch (error) {
    console.error(`Error:${error instanceof Error ? error.message : error}`);
    process.exit(1);
  }
};

export default connectDB;

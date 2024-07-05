import mongoose from "mongoose";
import { DB_NAME } from "../constant.js";

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    
    console.log(`MongoDB connected! Host: ${connectionInstance.connection.host}`);
  } catch (error) {
    console.error("DB connection ERROR:", error.message);
    process.exit(1); // Exit process with failure
  }
};

export { connectDB };

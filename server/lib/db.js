import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    mongoose.connection.on("connected", () =>
      console.log("Database Connected")
    );

    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/Samvaad-Y`,
      {
        serverSelectionTimeoutMS: 5000, // fail after 5 seconds
        socketTimeoutMS: 45000, // 45 seconds before socket timeout
      }
    );

    console.log(
      `MongoDB Connected!! DB HOST: ${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.log("Database connection failed:", error.message);
  }
};

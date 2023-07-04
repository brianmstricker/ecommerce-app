import mongoose from "mongoose";

export const connect = async () => {
  if (mongoose.connections[0].readyState === 1) return;
  try {
    return mongoose.connect(process.env.MONGODB_URI);
  } catch (error) {
    throw new Error("Could not connect to MongoDB");
  }
};

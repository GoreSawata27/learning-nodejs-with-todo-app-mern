import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/CRUD");
    console.log("DB connected");
  } catch (error) {
    console.error(error);
  }
};

export default connectDB;

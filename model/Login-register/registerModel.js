import mongoose from "mongoose";

const registerSchema = mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
    match: [/^\S+@\S+\.\S+$/, "Please enter a valid email address"],
  },
  username: {
    type: String,
    required: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
    trim: true,
    minlength: [6, "Password must be at least 6 characters long"],
  },
});

const register = mongoose.model("Register", registerSchema);

export default register;

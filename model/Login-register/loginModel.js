import mongoose from "mongoose";

const LoginSchema = mongoose.Schema({
  username: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
});

export default mongoose.model("login", LoginSchema);

import mongoose from "mongoose";

const TodoSchema = mongoose.Schema({
  todo: {
    type: String,
    require: true,
  },
});
const Todo = mongoose.model("Todo", TodoSchema);

export default Todo;

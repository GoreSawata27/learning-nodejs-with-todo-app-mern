import Todo from "../../model/Todo/todoModel.js";

const getTodos = async (req, res) => {
  try {
    const todos = await Todo.find({});
    res.status(200).json(todos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const postTodos = async (req, res) => {
  try {
    const { todo } = req.body;
    if (!todo) {
      return res.status(400).json({ message: "Todo field is required" });
    }
    const posttodo = await Todo.create({ todo });
    res.status(201).json(posttodo);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const updateTodo = async (req, res) => {
  try {
    const { id } = req.params;

    const product = await Todo.findByIdAndUpdate(id, req.body);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    const updatedProduct = await Todo.findById(id);
    res.status(200).json(updatedProduct);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteTdodo = async (req, res) => {
  try {
    const { id } = req.params;

    const product = await Todo.findByIdAndDelete(id);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.status(200).json({ message: "Product deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export { getTodos, postTodos, deleteTdodo, updateTodo };

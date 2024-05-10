import express from "express";
const router = express.Router();

import {
  getTodos,
  postTodos,
  updateTodo,
  deleteTdodo,
} from "../controller/Todo/todoController.js";

router.get("/", getTodos);
router.post("/", postTodos);
router.put("/:id", updateTodo);
router.delete("/:id", deleteTdodo);

export default router;

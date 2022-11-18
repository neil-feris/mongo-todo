// We setup our API routes in this file and map it to the appropriate controller
// import express
import express from "express";
// create a router
const router = express.Router();

// import our controllers
import {
  getTodos,
  addTodo,
  getTodoById,
  deleteTodoById,
  updateTodoById,
} from "../controllers/todo.controller.js";

router.get("/", getTodos); // map the getTodos controller to the / route

router.post("/add", addTodo); // map the addTodo controller to the /add route

router.get("/:id", getTodoById); // map the getTodoById controller to the /:id route

router.delete("/:id", deleteTodoById); // map the deleteTodoById controller to the /:id route

router.put("/update/:id", updateTodoById); // map the updateTodoById controller to the /update/:id route


export default router;

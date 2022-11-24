// We set up all our logic in this file
// import jwt from "jsonwebtoken";
import jwt from "jsonwebtoken";
// import the todo model
import Todo from "../models/todo.model.js";

// get all todos
export const getTodos = async (req, res) => {
  // get the token from the request header
  const token = req.headers.authorization.split(" ")[1];
  try {
    // verify the token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    // get all todos by the user
    const todos = await Todo.find({ author: decoded.username });
    // send the todos as a response
    res.status(200).json(todos);
  } catch (error) {
    // send an error if the token is invalid
    res.status(401).json({ error: "Invalid token" });
  }
};

// add a todo
export const addTodo = async (req, res) => {
  // get the token from the request header
  const token = req.headers.authorization.split(" ")[1];
  try {
    // verify the token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    // create a new todo
    const todo = new Todo({
      todo: req.body.todo,
      author: decoded.username,
      completed: false,
    });
    // save the todo to the database
    await todo.save();
    // send the todo as a response
    res.status(201).json(todo);
  } catch (error) {
    // send an error if the token is invalid
    res.status(401).json({ error: "Invalid token" });
  }
};

// get a todo by id
export const getTodoById = async (req, res) => {
  // get the token from the request header
  const token = req.headers.authorization.split(" ")[1];
  try {
    // verify the token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    // get the todo by id
    const todo = await Todo.findById(req.params.id); // find the todo by id
    // check if the todo exists
    if (todo) {
      // check if the todo belongs to the user
      if (todo.author === decoded.username) {
        // send the todo as a response
        res.status(200).json(todo);
      } else {
        // send an error if the todo does not belong to the user
        res.status(401).json({ error: "Unauthorised" });
      }
    } else {
      // send an error if the todo does not exist
      res.status(404).json({ error: "Todo not found" });
    }
  } catch (error) {
    // send an error if the token is invalid
    res.status(401).json({ error: "Invalid token" });
  }
};

// delete a todo by id
export const deleteTodoById = async (req, res) => {
  // get the token from the request header
  const token = req.headers.authorization.split(" ")[1];
  try {
    // verify the token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const todo = await Todo.findById(req.params.id); // find the todo by id
    if (todo.author === decoded.username) {
      // check if the todo belongs to the user
      await Todo.findByIdAndDelete(req.params.id); // delete the todo by id
      res.status(200).json({ message: "Todo deleted successfully" }); // return a success message
    } else {
      res.status(401).json({ error: "Unauthorised" });
    }
  } catch (error) {
    res.status(404).json({ message: error.message }); // if there is an error, return the error as json
  }
};

// update a todo by id
export const updateTodoById = async (req, res) => {
  // get the token from the request header
  const token = req.headers.authorization.split(" ")[1];
  try {
    // verify the token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const todo = await Todo.findById(req.params.id); // find the todo by id
    if (todo.author === decoded.username) {
      // check if the todo belongs to the user
      const updatedTodo = await Todo.findByIdAndUpdate(req.params.id, req.body); // update the todo by id
      res.status(200).json(updatedTodo); // return the updated todo as json
    } else {
      res.status(401).json({ error: "Unauthorised" });
    }
  } catch (error) {
    res.status(404).json({ message: error.message }); // if there is an error, return the error as json
  }
};

// We set up all our logic in this file
// import the todo model
import Todo from "../models/todo.model.js";

// get all todos
export const getTodos = async (req, res) => {
  try {
    const todos = await Todo.find(); // find all todos
    res.status(200).json(todos); // return all todos as json
  } catch (error) {
    res.status(404).json({ message: error.message }); // if there is an error, return the error as json
  }
};

// add a todo
export const addTodo = async (req, res) => {
  try {
    const todo = req.body.todo; // get the todo from the request body
    const author = req.body.author; // get the author from the request body
    const completed = false; // set completed to false for new todos

    const newTodo = new Todo({ todo, author, completed }); // create a new todo with the todo, author, and completed fields

    await newTodo.save(); // save the new todo to the database
    res.status(201).json(newTodo); // return the new todo as json and send 201 status code
  } catch (error) {
    res.status(400).json({ message: error.message }); // if there is an error, return the error as json
  }
};

// get a todo by id
export const getTodoById = async (req, res) => {
  try {
    const todo = await Todo.findById(req.params.id); // find the todo by id
    res.status(200).json(todo); // return the todo as json
  } catch (error) {
    res.status(404).json({ message: error.message }); // if there is an error, return the error as json
  }
};

// delete a todo by id
export const deleteTodoById = async (req, res) => {
  try {
    await Todo.findByIdAndDelete(req.params.id); // find the todo by id and delete it
    res.status(200).json("Todo deleted."); // return a success message as json
  } catch (error) {
    res.status(404).json({ message: error.message }); // if there is an error, return the error as json
  }
};

// update a todo by id
export const updateTodoById = async (req, res) => {
  try {
    const todo = await Todo.findById(req.params.id); // find the todo by id
    todo.todo = req.body.todo; // update the todo field
    todo.author = req.body.author; // update the author field
    todo.completed = req.body.completed; // update the completed field

    await todo.save(); // save the updated todo to the database
    res.status(200).json("Todo updated!"); // return a success message as json
  } catch (error) {
    res.status(404).json({ message: error.message }); // if there is an error, return the error as json
  }
};

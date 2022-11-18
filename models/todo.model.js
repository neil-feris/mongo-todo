// We setup our Todo model in this file
// import mongoose
import mongoose from "mongoose";

// create a schema for todos with a field called description which is a string
const todoSchema = new mongoose.Schema(
  {
    todo: { type: String, required: true, trim: true },
    author: { type: String, required: true, trim: true },
    completed: { type: Boolean, required: true, trim: true },
  },
  { timestamps: true } // this will automatically add createdAt and updatedAt fields to the schema
);

// create a model for todos
const Todo = mongoose.model("Todo", todoSchema);

// export the model
export default Todo;

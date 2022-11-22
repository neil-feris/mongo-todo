// We setup our User model in this file
// import mongoose
import mongoose from "mongoose";

// create a schema for users with a field called description which is a string
const userSchema = new mongoose.Schema(
  {
    username: { type: String, required: true, trim: true },
    password: { type: String, required: true, trim: true },
  },
  { timestamps: true } // this will automatically add createdAt and updatedAt fields to the schema
);

// create a model for users
const User = mongoose.model("User", userSchema);

// export the model
export default User;

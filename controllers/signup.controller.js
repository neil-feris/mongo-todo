// logic for signup
import jwt from "jsonwebtoken";

// import User model
import User from "../models/user.model.js";

export const signup = async (req, res) => {
  // get the username and password from the request body
  const { username, password } = req.body;
  console.log(username, password);

  // create a new user in the database
  const user = await User.create({ username, password });

  // return a 201 status code and the user as json
  res.status(201).json(user);
};

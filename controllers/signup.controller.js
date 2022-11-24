// logic for signup
// import jwt for token generation and validation
import jwt from "jsonwebtoken";

// import User model
import User from "../models/user.model.js";

export const signup = async (req, res) => {
  // get the username and password from the request body
  const { username, password } = req.body;

  // check if user is already in the database
  let user = await User.findOne({
    username: username,
  });

  // if user is already in the database, return error
  if (user) {
    res.status(409).json({ error: "User already exists" });
  } else {
    // create a new user in the database
    user = await User.create({ username, password });

    // return a 201 status code and the user as json
    res.status(201).json(user);
  }
};

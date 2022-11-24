// logic for login
// import jwt for token generation and validation
import jwt from "jsonwebtoken";

// import User model
import User from "../models/user.model.js";

export const login = async (req, res) => {
  // get the username and password from the request body
  const { username, password } = req.body;

  // check if the username and password are correct from users database
  const user = await User.findOne({ username, password });

  // if the user exists
  if (user) {
    // create a token
    const token = jwt.sign({ username }, process.env.JWT_SECRET);
    // return the token
    res.status(200).json({ token });
  }
  // if the user does not exist
  else {
    // return an error
    res.status(401).json({ error: "Invalid credentials" });
  }
};

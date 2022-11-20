// logic for login
import jwt from "jsonwebtoken";

export const login = async (req, res) => {
  // get the username and password from the request body
  const { username, password } = req.body;
  console.log(username, password);

  // check if the username and password are correct
  if (username === "Neil Feris" && password === "admin") {
    // create a token that is valid for 1 hour
    const token = jwt.sign({ username }, process.env.JWT_SECRET, {
      expiresIn: "1h",
      algorithm: "HS256",
    });
    res.status(200).json({ token }); // return the token as json
  } else {
    // return an error if the username or password is incorrect
    res.status(401).json({ error: "Invalid username or password" });
  }
};

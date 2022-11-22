// import express
import express from "express";
// import cors for Cross Origin Resource Sharing
import cors from "cors";
// import todos route
import todosRoute from "./routes/todo.route.js";
// import login route
import loginRoute from "./routes/login.route.js";
// import signup route
import signupRoute from "./routes/signup.route.js";

const app = express();

// setup cors
app.use(cors());
// express middleware to parse json we no longer need body-parser
app.use(express.json());

// setup routes anything that doesn't match the routes specified will send a 404
app.use("/api/todos", todosRoute);
app.use("/api/login", loginRoute);
app.use("/api/signup", signupRoute);
app.use("*", (req, res) => res.status(404).json({ error: "not found" }));

export default app;

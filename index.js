// import express
import express from "express";

// import mongoose
import mongoose from "mongoose";

// import dotenv
import dotenv from "dotenv";
dotenv.config();

// import app from server.js
import app from "./server.js";

// set port to 3001 or the environment variable PORT
const port = process.env.PORT || 3001;

// set the URI for the database to the environment variable MONGODB_URI
const uri = process.env.MONGODB_URI;

// connect to the database
mongoose.connect(uri, {
  useNewUrlParser: true,
});

// get the connection
const connection = mongoose.connection;

// if there is an error, log it
connection.on("error", (err) => {
  console.log("connection error:", err);
});

// if the connection is open, log to console and start the server
connection.once("open", () => {
  app.listen(port, () => {
    console.log("MongoDB database connection established successfully");
    console.log(`Server is running on port: ${port}`);
  });
});

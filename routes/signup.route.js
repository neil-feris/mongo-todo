// Set up the signup router
import express from "express";
const router = express.Router();

// import the signup controller
import { signup } from "../controllers/signup.controller.js";

// map the signup controller to the / route
router.post("/", signup);

export default router;

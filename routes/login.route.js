// Set up the login router
import express from "express";
const router = express.Router();

// import the login controller
import { login } from "../controllers/login.controller.js";

// map the login controller to the / route
router.post("/", login);

export default router;
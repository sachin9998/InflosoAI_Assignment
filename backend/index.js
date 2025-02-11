import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import { login, signup } from "./Controllers/auth.controller.js";
import connectDB from "./db.js";
import { loginValidation, signupValidation } from "./Middleware/Validation.js";
dotenv.config();

const port = process.env.PORT || 4000;
const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

app.get("/", (req, res) => {
  res.json({
    message: "Server is running",
    success: true,
  });
});

// Routes
app.post("/signup", signupValidation, signup);
app.post("/login", loginValidation, login);

// Server listening
app.listen(3000, (req, res) => {
  console.log("Server is running on port: ", port);
  connectDB();
});

import express from "express";

// Importing morgan
import morgan from "morgan";

import employeeRoutes from "./api/v1/routes/employeeroutes";

import branchRoutes from "./api/v1/routes/branchroutes";

import dotenv from "dotenv";

const app = express();

app.use(express.json());

// Use morgan for HTTP request logging
app.use(morgan("combined"));

// Load environment variables BEFORE your internal imports!
dotenv.config();

app.get("/health", (req, res) => {
  res.status(200).send("Server is healthy");
});

app.use("/api/v1/employees", employeeRoutes);

app.use("/api/v1/branches", branchRoutes);

export default app;
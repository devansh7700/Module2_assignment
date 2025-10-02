import express from "express";

import employeeRoutes from "./api/v1/routes/employeeroutes";

// Importing morgan
import morgan from "morgan";

const app = express();

app.use(express.json());

// Use morgan for HTTP request logging
app.use(morgan("combined"));

app.get("/health", (req, res) => {
  res.status(200).send("Server is healthy");
});

// API v1 routes 

app.use("/api/v1/employees", employeeRoutes);

export default app;
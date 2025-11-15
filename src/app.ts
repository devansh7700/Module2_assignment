import express from "express";
import morgan from "morgan";
import employeeRoutes from "./api/v1/routes/employeeroutes";
import branchRoutes from "./api/v1/routes/branchroutes";
import dotenv from "dotenv";
import helmet from "helmet";

const app = express();

app.use(express.json());

// Use morgan for HTTP request logging
app.use(morgan("combined"));

// Load environment variables BEFORE your internal imports!
dotenv.config();

// Apply basic Helmet security
app.use(helmet());

app.get("/health", (req, res) => {
  res.status(200).send("Server is healthy");
});

app.use("/api/v1/employees", employeeRoutes);

app.use("/api/v1/branches", branchRoutes);

app.use((req, res, next) => {
  if (req.path.includes("/users") || req.path.includes("/admin")) {
    res.setHeader("Cache-Control", "no-store, no-cache, must-revalidate, private");
    res.setHeader("Pragma", "no-cache");
    res.setHeader("Expires", "0");
    res.setHeader("X-RateLimit-Policy", "100-per-hour");
  }
  next();
});

export default app;
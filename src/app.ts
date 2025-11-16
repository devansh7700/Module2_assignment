import express from "express";
import morgan from "morgan";
import employeeRoutes from "./api/v1/routes/employeeroutes";
import branchRoutes from "./api/v1/routes/branchroutes";
import dotenv from "dotenv";
import helmet from "helmet";
import cors from "cors";
import { getCorsOptions } from "./config/corsconfig";

// Load environment variables BEFORE your internal imports!
dotenv.config();

const app = express();

app.use(express.json());

// Use morgan for HTTP request logging
app.use(morgan("combined"));

// Apply basic Helmet security
app.use(helmet());

app.use(cors(getCorsOptions()));

// Public endpoints (anyone can access)
const publicCorsOptions = {
    origin: "*",
    methods: ["GET"],
};

// Strict authenticated endpoints
const strictCorsOptions = {
    origin: process.env.ALLOWED_ORIGINS?.split(",") || [],
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
};

// Apply public CORS
app.use("/health", cors(publicCorsOptions));
app.use("/api-docs", cors(publicCorsOptions));

// Apply strict CORS
app.use("/api/v1/users", cors(strictCorsOptions));
app.use("/api/v1/admin", cors(strictCorsOptions));
app.use("/api/v1/employees", cors(strictCorsOptions));
app.use("/api/v1/branches", cors(strictCorsOptions));

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
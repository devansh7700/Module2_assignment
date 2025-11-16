import fs from "fs";
import { generateSwaggerSpec } from "../config/swaggerOptions";

// Generate Swagger spec
const specs = generateSwaggerSpec();

// Write to openapi.json
fs.writeFileSync("openapi.json", JSON.stringify(specs, null, 2));

console.log("OpenAPI specification generated successfully!");

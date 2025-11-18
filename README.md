# Employee and Branch Management API.

## Project Overview

This API is a secure achieve system to deal with employees and branches.  
It is developed on the basis of Node.js, Express, TypeScript and is based on clean architecture.

The API includes:
- Employees and branches CRUD.
- Middleware that is used in error handling and validation.
- Helmet configuration + Secure CORS.
- automated documentation of API on GitHub Pages.
- Versioned API routing (`/api/v1/...`)

## Installation & Setup

### 1. Clone the Repository
```bash
git clone https://github.com/devansh7700/Module2_assignment.git
cd Module2_assignment
Install dependencies by using npm install
Create a .env file
Start the server
Health check using: http://localhost:3001/health

## API documentation

Link to Public Documentation:
https://devansh7700.github.io/Module2_assignment/

Local Documentation Access:

Run:
npm run generate-docs

Open:
/docs/index.html

Security configuration:

## CORS configuartion

This project is customized to CORS configuration which can vary based on the environment:

Development Mode: 

export const getCorsOptions = () => {
    const isDevelopment = process.env.NODE_ENV === "development";

    if (isDevelopment) {
        return {
            origin: true, 
            credentials: true,
            methods: ["GET", "POST", "PUT", "DELETE"],
            allowedHeaders: ["Content-Type", "Authorization"],
        };
    }

1. Eliminates CORS errors in development that are not necessary.

2. Permits authenticity testing credentials.

Production Mode (Strict CORS):

return {
    origin: process.env.ALLOWED_ORIGINS?.split(",") || [],
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
    exposedHeaders: ["X-RateLimit-Policy"],
    maxAge: 600,
};

1. Your API can only be accessed by reputable domains.

2. third-party websites that are not known.

3. Only whitelisted origins are permitted to have their credentials.

4. maxAge stores preflight requests to avail itself of performance.

## Helmet security configuartion:

Helmet automatically adds more than 11 HTTP security headers

Usage:
app.use(helmet());

Top Helmet Headers and their uses:

Content-Security-Policy	                              Malicious inline script protection (XSS blocks).
X-Frame-Options:SAMEORIGIN	                          Prevents clickjacking.
X-Content-Type-Options:nosniff                        Helps to prevent MIME type attacks.
Strict-Transport-Security	                          The HTTPS is implemented.
Cross-Origin-Resource-Policy	                      Prevents resources stealing externally.

## Why Helmet was chosen:

Secures API consumers against MITM attacks.

Allows fewer vulnerabilities with no additional configuration.

Complete production-level security in Node.js APIs.

## Instructions to create Environment Variable Security:

.env is used to store sensitive data such as API keys, database URLs and many more.
Never commit your .env to github to protect your sensitive data.
Always make sure to add your .env file to .gitignore.

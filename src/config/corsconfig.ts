export const getCorsOptions = () => {
    const isDevelopment = process.env.NODE_ENV === "development";

    if (isDevelopment) {
        // Relaxed CORS in development for testing (Postman, local frontend)
        return {
            origin: true,  // Allow all origins
            credentials: true,
            methods: ["GET", "POST", "PUT", "DELETE"],
            allowedHeaders: ["Content-Type", "Authorization"],
        };
    }

    // STRICT CORS in production
    return {
        // Allowed origins come from .env file:
        // ALLOWED_ORIGINS=https://myfrontend.com,https://adminpanel.com
        origin: process.env.ALLOWED_ORIGINS?.split(",") || [],
        credentials: true,
        methods: ["GET", "POST", "PUT", "DELETE"],
        allowedHeaders: ["Content-Type", "Authorization"],
        exposedHeaders: ["X-RateLimit-Policy"], // Your custom security header
        maxAge: 600, // Cache preflight requests (10 mins)
    };
};

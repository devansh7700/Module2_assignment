import swaggerJsdoc from "swagger-jsdoc";

const swaggerOptions: swaggerJsdoc.Options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Employee & Branch Management API Documentation",
            version: "1.0.0",
            description:
                "OpenAPI documentation for the Employee and Branch Management backend application.",
        },
        servers: [
            {
                url: "http://localhost:3000",
                description: "Local Development Server",
            },
        ],
        components: {
            securitySchemes: {
                bearerAuth: {
                    type: "http",
                    scheme: "bearer",
                    bearerFormat: "JWT",
                },
            },
        },
        security: [
            {
                bearerAuth: [],
            },
        ],
    },

    
    apis: [
        "./src/api/v1/routes/*.ts",
        "./src/api/v1/validation/*.ts",
    ],
};

// Generate Swagger spec
export const generateSwaggerSpec = (): object => {
    return swaggerJsdoc(swaggerOptions);
};

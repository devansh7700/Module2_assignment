import request from "supertest";
import app from "../src/app";

describe("Employee API - Selected Tests", () => {
  let employeeId: number;

  it("POST /api/v1/employees - should create a new employee", async () => {
    const res = await request(app)
      .post("/api/v1/employees")
      .send({
        name: "John Doe",
        position: "Developer",
        department: "IT",
        email: "john.doe@example.com",
        phone: "123-456-7890",
        branchId: 1,
      });
    expect(res.status).toBe(201);
    expect(res.body.data).toHaveProperty("id");
    employeeId = res.body.data.id;
  });

  it("POST /api/v1/employees - should return error for missing fields", async () => {
    const res = await request(app)
      .post("/api/v1/employees")
      .send({ name: "Incomplete Employee" });
    expect(res.status).toBe(400);
  });

  
  it("GET /api/v1/employees - should return all employees", async () => {
    const res = await request(app).get("/api/v1/employees");
    expect(res.status).toBe(200);
    expect(Array.isArray(res.body.data)).toBe(true);
  });

  it("GET /api/v1/employees/:id - should return a single employee", async () => {
    const res = await request(app).get(`/api/v1/employees/${employeeId}`);
    expect(res.status).toBe(200);
    expect(res.body.data.id).toBe(employeeId);
  });

  it("GET /api/v1/employees/:id - should return 404 for invalid ID", async () => {
    const res = await request(app).get("/api/v1/employees/9999");
    expect(res.status).toBe(404);
  });

  it("PUT /api/v1/employees/:id - should update employee details", async () => {
    const res = await request(app)
      .put(`/api/v1/employees/${employeeId}`)
      .send({ position: "Senior Developer" });
    expect(res.status).toBe(200);
    expect(res.body.data.position).toBe("Senior Developer");
  });

  it("PUT /api/v1/employees/:id - should return 404 for invalid ID", async () => {
    const res = await request(app)
      .put("/api/v1/employees/9999")
      .send({ position: "Senior Developer" });
    expect(res.status).toBe(404);
  });

});

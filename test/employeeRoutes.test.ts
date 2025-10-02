import request from "supertest";
import app from "../src/app";

describe("Employee API - Selected Tests", () => {
  let employeeId: number;

  // 1. Create Employee - Success
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

  // 2. Create Employee - Missing fields
  it("POST /api/v1/employees - should return error for missing fields", async () => {
    const res = await request(app)
      .post("/api/v1/employees")
      .send({ name: "Incomplete Employee" });
    expect(res.status).toBe(400);
  });

});

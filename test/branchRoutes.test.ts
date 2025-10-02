import request from "supertest";
import app from "../src/app";

describe("Branch API - Selected Tests", () => {
  let branchId: number;

  it("POST /api/v1/branches - should create a new branch", async () => {
    const res = await request(app)
      .post("/api/v1/branches")
      .send({ name: "New Branch", address: "123 Main St", phone: "123-456-7890" });
    expect(res.status).toBe(201);
    expect(res.body.data).toHaveProperty("id");
    branchId = res.body.data.id;
  });

  it("POST /api/v1/branches - should return 400 for missing fields", async () => {
    const res = await request(app).post("/api/v1/branches").send({ name: "Incomplete Branch" });
    expect(res.status).toBe(400);
  });

});
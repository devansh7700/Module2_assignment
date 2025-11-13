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

  it("GET /api/v1/branches - should return all branches", async () => {
    const res = await request(app).get("/api/v1/branches");
    expect(res.status).toBe(200);
    expect(Array.isArray(res.body.data)).toBe(true);
  });

  it("GET /api/v1/branches/:id - should return a branch", async () => {
    const res = await request(app).get(`/api/v1/branches/${branchId}`);
    expect(res.status).toBe(200);
    expect(res.body.data.id).toBe(branchId);
  });

  it("GET /api/v1/branches/:id - should return 404 for invalid ID", async () => {
    const res = await request(app).get("/api/v1/branches/9999");
    expect(res.status).toBe(404);
  });

  it("PUT /api/v1/branches/:id - should update branch", async () => {
    const res = await request(app)
      .put(`/api/v1/branches/${branchId}`)
      .send({ phone: "987-654-3210" });
    expect(res.status).toBe(200);
    expect(res.body.data.phone).toBe("987-654-3210");
  });

  it("PUT /api/v1/branches/:id - should return 404 for invalid ID", async () => {
    const res = await request(app).put("/api/v1/branches/9999").send({ phone: "987-654-3210" });
    expect(res.status).toBe(404);
  });

  it("DELETE /api/v1/branches/:id - should delete a branch", async () => {
    const res = await request(app).delete(`/api/v1/branches/${branchId}`);
    expect(res.status).toBe(200);
  });

  it("DELETE /api/v1/branches/:id - should return 404 for invalid ID", async () => {
    const res = await request(app).delete("/api/v1/branches/9999");
    expect(res.status).toBe(404);
  });

});
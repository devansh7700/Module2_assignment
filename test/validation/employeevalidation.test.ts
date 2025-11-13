import { createEmployeeSchema, updateEmployeeSchema } from "../../src/api/v1/validation/employeevalidation";

describe("Employee Validation Schema", () => {
  it("should pass when all required fields are provided", () => {
    const validData = {
      name: "Devan Patel",
      email: "devan.patel@example.com",
      position: "Manager",
      branchId: "b123"
    };
    const { error } = createEmployeeSchema.validate(validData);
    expect(error).toBeUndefined();
  });

  it("should fail when required fields are missing", () => {
    const invalidData = {
      email: "devan.patel@example.com"
    };
    const { error } = createEmployeeSchema.validate(invalidData);
    expect(error).toBeDefined();
    expect(error?.message).toContain('"name" is required');
  });
});

// Update Employee Schema Tests
  describe("updateEmployeeSchema", () => {
    it("should pass when valid update data is provided", () => {
      const validUpdate = { position: "Senior Manager" };
      const { error } = updateEmployeeSchema.validate(validUpdate);
      expect(error).toBeUndefined();
    });

    it("should fail when no fields are provided for update", () => {
      const invalidUpdate = {};
      const { error } = updateEmployeeSchema.validate(invalidUpdate);
      expect(error).toBeDefined();
    });

    it("should fail when email format is invalid in update", () => {
      const invalidUpdate = { email: "invalid-email" };
      const { error } = updateEmployeeSchema.validate(invalidUpdate);
      expect(error).toBeDefined();
      expect(error?.message).toContain('"email" must be a valid email');
    });
  });
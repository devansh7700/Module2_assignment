import { createEmployeeSchema } from "../../src/api/v1/validation/employeevalidation";

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

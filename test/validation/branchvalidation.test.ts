import { createBranchSchema, updateBranchSchema} from "../../src/api/v1/validation/branchvalidation";

describe("Branch Validation Schema", () => {
  it("should pass when all required fields are provided for creation", () => {
    const validData = {
      name: "Main Branch",
      address: "123 Downtown Street",
      phone: "123-456-7890"
    };

    const { error } = createBranchSchema.validate(validData);
    expect(error).toBeUndefined();
  });

  it("should fail when missing required fields for creation", () => {
    const invalidData = {
      address: "123 Downtown Street"
    };

    const { error } = createBranchSchema.validate(invalidData);
    expect(error).toBeDefined();
    expect(error?.message).toContain('"name" is required');
  });

  it("should pass when updating only one field", () => {
    const validUpdate = { address: "456 Uptown Avenue" };
    const { error } = updateBranchSchema.validate(validUpdate);
    expect(error).toBeUndefined();
  });

  it("should fail when update has no fields", () => {
    const invalidUpdate = {};
    const { error } = updateBranchSchema.validate(invalidUpdate);
    expect(error).toBeDefined();
    expect(error?.message).toContain("At least one field");
  });
});
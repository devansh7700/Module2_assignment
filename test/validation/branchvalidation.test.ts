import { createBranchSchema,} from "../../src/api/v1/validation/branchvalidation";

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
});
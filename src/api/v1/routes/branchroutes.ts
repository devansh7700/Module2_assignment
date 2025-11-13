import { Router } from "express";
import * as branchController from "../controllers/branchcontroller";
import { validateBody } from "../middleware/validate";
import { createBranchSchema, updateBranchSchema } from "../validation/branchvalidation";

const router = Router();

router.get("/", branchController.getAllBranches);
router.get("/:id", branchController.getBranchById);
router.post("/", validateBody(createBranchSchema), branchController.createBranch);
router.put("/:id", validateBody(updateBranchSchema), branchController.updateBranch);
router.delete("/:id", branchController.deleteBranch);

export default router;

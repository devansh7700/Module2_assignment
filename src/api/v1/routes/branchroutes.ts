import { Router } from "express";
import * as branchController from "../controllers/branchcontroller";
import { validateBody } from "../middleware/validate";
import { createBranchSchema, updateBranchSchema } from "../validation/branchvalidation";

const router = Router();

/**
 * @openapi
 * /branches:
 *   get:
 *     summary: Retrieve all branches
 *     tags: [Branches]
 *     responses:
 *       200:
 *         description: List of branches
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/CreateBranch'
 */
router.get("/", branchController.getAllBranches);

/**
 * @openapi
 * /branches/{id}:
 *   get:
 *     summary: Get a branch by ID
 *     tags: [Branches]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *           example: "branch_001"
 *     responses:
 *       200:
 *         description: Branch details
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/CreateBranch'
 *       404:
 *         description: Branch not found
 */
router.get("/:id", branchController.getBranchById);

/**
 * @openapi
 * /branches:
 *   post:
 *     summary: Create a new branch
 *     tags: [Branches]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CreateBranch'
 *     responses:
 *       201:
 *         description: Branch created successfully
 *       400:
 *         description: Invalid input
 */
router.post("/", validateBody(createBranchSchema), branchController.createBranch);

/**
 * @openapi
 * /branches/{id}:
 *   put:
 *     summary: Update an existing branch
 *     tags: [Branches]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/UpdateBranch'
 *     responses:
 *       200:
 *         description: Branch updated successfully
 *       400:
 *         description: Invalid input
 *       404:
 *         description: Branch not found
 */
router.put("/:id", validateBody(updateBranchSchema), branchController.updateBranch);

/**
 * @openapi
 * /branches/{id}:
 *   delete:
 *     summary: Delete a branch
 *     tags: [Branches]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Branch deleted successfully
 *       404:
 *         description: Branch not found
 */
router.delete("/:id", branchController.deleteBranch);

export default router;

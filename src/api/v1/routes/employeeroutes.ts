import { Router } from "express";
import * as employeeController from "../controllers/employeecontroller";
import { validateBody } from "../middleware/validate";
import { createEmployeeSchema, updateEmployeeSchema } from "../validation/employeevalidation";

const router = Router();

router.get("/", employeeController.getAllEmployeesController);
router.get("/:id", employeeController.getEmployeeByIdController);
router.post("/", validateBody(createEmployeeSchema), employeeController.createEmployeeController);
router.put("/:id", validateBody(updateEmployeeSchema), employeeController.updateEmployeeController);
router.delete("/:id", employeeController.deleteEmployeeController);

router.get("/branch/:branchId", employeeController.getEmployeesByBranchController);
router.get("/department/:department", employeeController.getEmployeesByDepartmentController);

export default router;

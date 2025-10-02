import { Router } from "express";
import * as employeeController from "../controllers/employeecontroller";

const router = Router();

router.get("/", employeeController.getAllEmployeesController);
router.get("/:id", employeeController.getEmployeeByIdController);
router.post("/", employeeController.createEmployeeController);
router.put("/:id", employeeController.updateEmployeeController);
router.delete("/:id", employeeController.deleteEmployeeController);

export default router;

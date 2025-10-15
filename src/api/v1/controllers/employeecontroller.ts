import { Request, Response } from "express";
import * as employeeService from "../services/employeeservice";

// Get all employees
export const getAllEmployeesController = (req: Request, res: Response) => {
  const allEmployees = employeeService.getAllEmployees();
  res.status(200).json({ message: "All employees", data: allEmployees });
};

// Get employee by ID
export const getEmployeeByIdController = (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const employee = employeeService.getEmployeeById(id);

  employee
    ? res.status(200).json({ message: "Employee found", data: employee })
    : res.status(404).json({ message: `Employee with ID ${id} not found` });
};

// Create employee
export const createEmployeeController = (req: Request, res: Response) => {
  const { name, position, department, email, phone, branchId } = req.body;

  if (!name || !position || !department || !email || !phone || !branchId) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  const newEmployee = employeeService.createEmployee({ name, position, department, email, phone, branchId });
  res.status(201).json({ message: "Employee created", data: newEmployee });
};

// Update employee
export const updateEmployeeController = (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const updatedEmployee = req.body;

  const employee = employeeService.updateEmployee(id, updatedEmployee);

  employee
    ? res.status(200).json({ message: "Employee updated", data: employee })
    : res.status(404).json({ message: `Employee with ID ${id} not found` });
};

// Delete employee
export const deleteEmployeeController = (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const success = employeeService.deleteEmployee(id);

  success
    ? res.status(200).json({ message: `Employee with ID ${id} deleted` })
    : res.status(404).json({ message: `Employee with ID ${id} not found` });
};

// ✅ Get employees by branch
export const getEmployeesByBranchController = (req: Request, res: Response) => {
  const branchId = Number(req.params.branchId);
  const employees = isNaN(branchId)
    ? null
    : employeeService.getEmployeesByBranch(branchId);

  !employees
    ? res.status(400).json({ message: "Invalid branch ID" })
    : employees.length
    ? res.status(200).json({ message: "Employees found for this branch", data: employees })
    : res.status(404).json({ message: "No employees found for this branch" });
};

// ✅ Get employees by department
export const getEmployeesByDepartmentController = (req: Request, res: Response) => {
  const department = req.params.department;
  const employees = department
    ? employeeService.getEmployeesByDepartment(department)
    : null;

  !employees
    ? res.status(400).json({ message: "Department parameter is required" })
    : employees.length
    ? res.status(200).json({message: "Employees found for this department",data: employees,})
    : res.status(404).json({ message: "No employees found for this department" });
};
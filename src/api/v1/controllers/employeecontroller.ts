import { Request, Response } from "express";
import * as employeeService from "../services/employeeservice";
import { Employee } from "../models/employeeModel";
import { ApiResponse, ApiError } from "../models/responseModel";

// Get all employees
export const getAllEmployeesController = (req: Request, res: Response) => {
  try {
    const allEmployees = employeeService.getAllEmployees();
    const response: ApiResponse<Employee[]> = {
      success: true,
      message: "All employees retrieved successfully",
      data: allEmployees,
    };
    res.status(200).json(response);
  } catch (error) {
    const err: ApiError = {
      success: false,
      message: "Failed to fetch employees",
      error: (error as Error).message,
    };
    res.status(500).json(err);
  }
};
// Get employee by ID
export const getEmployeeByIdController = (req: Request, res: Response) => {
  try{
    const id = Number(req.params.id);
    const employee = employeeService.getEmployeeById(id);

  if (!employee) {
      const err: ApiError = {
        success: false,
        message: `Employee with ID ${id} not found`,
      };
      return res.status(404).json(err);
    }

    const response: ApiResponse<Employee> = {
      success: true,
      message: "Employee found successfully",
      data: employee,
    };
    res.status(200).json(response);
  } catch (error) {
    const err: ApiError = {
      success: false,
      message: "Error retrieving employee",
      error: (error as Error).message,
    };
    res.status(500).json(err);
  }
};

// Create employee
export const createEmployeeController = (req: Request, res: Response) => {
  try {  
    const { name, position, department, email, phone, branchId } = req.body;

    if (!name || !position || !department || !email || !phone || !branchId) {
      const err: ApiError = {
        success: false,
        message: "Missing required fields",
      };
      return res.status(400).json(err);
    }

    const newEmployee = employeeService.createEmployee({
      name,
      position,
      department,
      email,
      phone,
      branchId,
    });

    const response: ApiResponse<Employee> = {
      success: true,
      message: "Employee created successfully",
      data: newEmployee,
    };
    res.status(201).json(response);
  } catch (error) {
    const err: ApiError = {
      success: false,
      message: "Failed to create employee",
      error: (error as Error).message,
    };
    res.status(500).json(err);
  }
};
// Update employee
export const updateEmployeeController = (req: Request, res: Response) => {
  try{
  const id = Number(req.params.id);
  const updatedEmployee = req.body;

  const employee = employeeService.updateEmployee(id, updatedEmployee);

   if (!employee) {
      const err: ApiError = {
        success: false,
        message: `Employee with ID ${id} not found`,
      };
      return res.status(404).json(err);
    }

    const response: ApiResponse<Employee> = {
      success: true,
      message: "Employee updated successfully",
      data: employee,
    };
    res.status(200).json(response);
  } catch (error) {
    const err: ApiError = {
      success: false,
      message: "Failed to update employee",
      error: (error as Error).message,
    };
    res.status(500).json(err);
  }
};

// Delete employee
export const deleteEmployeeController = (req: Request, res: Response) => {
  try{
  const id = Number(req.params.id);
  const success = employeeService.deleteEmployee(id);

  if (!success) {
      const err: ApiError = {
        success: false,
        message: `Employee with ID ${id} not found`,
      };
      return res.status(404).json(err);
    }

    const response: ApiResponse<null> = {
      success: true,
      message: `Employee with ID ${id} deleted successfully`,
      data: null,
    };
    res.status(200).json(response);
  } catch (error) {
    const err: ApiError = {
      success: false,
      message: "Failed to delete employee",
      error: (error as Error).message,
    };
    res.status(500).json(err);
  }
};

// Get employees by branch
export const getEmployeesByBranchController = (req: Request, res: Response) => {
  try{
    const branchId = Number(req.params.branchId);
    if (isNaN(branchId)) {
      const err: ApiError = {
        success: false,
        message: "Invalid branch ID parameter",
      };
      return res.status(400).json(err);
    }

    const employees = employeeService.getEmployeesByBranch(branchId);
    const response: ApiResponse<Employee[]> = {
      success: true,
      message: employees.length
        ? "Employees found for this branch"
        : "No employees found for this branch",
      data: employees,
    };
    res.status(200).json(response);
  } catch (error) {
    const err: ApiError = {
      success: false,
      message: "Error fetching employees by branch",
      error: (error as Error).message,
    };
    res.status(500).json(err);
  }
};  
// Get employees by department
export const getEmployeesByDepartmentController = (req: Request, res: Response) => {
  try{
    const department = req.params.department;
     if (!department) {
      const err: ApiError = {
        success: false,
        message: "Department parameter is required",
      };
      return res.status(400).json(err);
    }

    const employees = employeeService.getEmployeesByDepartment(department);
    const response: ApiResponse<Employee[]> = {
      success: true,
      message: employees.length
        ? "Employees found for this department"
        : "No employees found for this department",
      data: employees,
    };
    res.status(200).json(response);
  } catch (error) {
    const err: ApiError = {
      success: false,
      message: "Error fetching employees by department",
      error: (error as Error).message,
    };
    res.status(500).json(err);
  }
};
import { Employee, employees } from "../../../data/employees";

// Get all employees
export const getAllEmployees = (): Employee[] => {
  return employees;
};

// Get employee by ID
export const getEmployeeById = (id: number): Employee | undefined => {
  return employees.find((e) => e.id === id);
};

// Create employee
export const createEmployee = (emp: Omit<Employee, "id">): Employee => {
  const newId = employees.length > 0 ? employees[employees.length - 1].id + 1 : 1;
  const newEmployee: Employee = { ...emp, id: newId };
  employees.push(newEmployee);
  return newEmployee;
};

// Update employee
export const updateEmployee = (id: number, emp: Partial<Omit<Employee, "id">>): Employee | undefined => {
  const index = employees.findIndex((e) => e.id === id);
  if (index === -1) return undefined;
  employees[index] = { ...employees[index], ...emp };
  return employees[index];
};

// Delete employee
export const deleteEmployee = (id: number): boolean => {
  const index = employees.findIndex((e) => e.id === id);
  if (index === -1) return false;
  employees.splice(index, 1);
  return true;
};

// ✅ Get employees by branch ID
export const getEmployeesByBranch = (branchId: number) => {
  return employees.filter((emp) => emp.branchId === branchId);
};

// ✅ Get employees by department name
export const getEmployeesByDepartment = (department: string) => {
  return employees.filter(
    (emp) => emp.department.toLowerCase() === department.toLowerCase()
  );
};
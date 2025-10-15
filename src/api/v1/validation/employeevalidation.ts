import Joi from "joi";

export const createEmployeeSchema = Joi.object({
  name: Joi.string().min(1).required(),
  position: Joi.string().required(),
  department: Joi.string().required(),
  email: Joi.string().email().required(),
  phone: Joi.string().required(),
  branchId: Joi.number().integer().required(),
});

export const updateEmployeeSchema = Joi.object({
  name: Joi.string().min(1),
  position: Joi.string(),
  department: Joi.string(),
  email: Joi.string().email(),
  phone: Joi.string(),
  branchId: Joi.number().integer(),
}).min(1); 

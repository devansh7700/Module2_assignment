import Joi from "joi";

/**
 * @openapi
 * components:
 *   schemas:
 *     CreateEmployee:
 *       type: object
 *       required:
 *         - name
 *         - position
 *         - department
 *         - email
 *         - phone
 *         - branchId
 *       properties:
 *         name:
 *           type: string
 *           example: "John Doe"
 *         position:
 *           type: string
 *           example: "Manager"
 *         department:
 *           type: string
 *           example: "Sales"
 *         email:
 *           type: string
 *           format: email
 *           example: "john@example.com"
 *         phone:
 *           type: string
 *           example: "+1234567890"
 *         branchId:
 *           type: integer
 *           example: 1
 *
 *     UpdateEmployee:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *         position:
 *           type: string
 *         department:
 *           type: string
 *         email:
 *           type: string
 *           format: email
 *         phone:
 *           type: string
 *         branchId:
 *           type: integer
 */

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

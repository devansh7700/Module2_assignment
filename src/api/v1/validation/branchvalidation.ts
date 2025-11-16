import Joi from "joi";

/**
 * @openapi
 * components:
 *   schemas:
 *     CreateBranch:
 *       type: object
 *       required:
 *         - name
 *         - address
 *         - phone
 *       properties:
 *         name:
 *           type: string
 *           example: "Downtown Branch"
 *         address:
 *           type: string
 *           example: "123 Main Street"
 *         phone:
 *           type: string
 *           example: "+1234567890"
 *
 *     UpdateBranch:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *         address:
 *           type: string
 *         phone:
 *           type: string
 */

export const createBranchSchema = Joi.object({
  name: Joi.string().required(),
  address: Joi.string().required(),
  phone: Joi.string().required(),
});

export const updateBranchSchema = Joi.object({
  name: Joi.string(),
  address: Joi.string(),
  phone: Joi.string(),
}).min(1);

import Joi from "joi";

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

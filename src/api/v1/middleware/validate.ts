import { Request, Response, NextFunction } from "express";
import { ObjectSchema } from "joi";

export const validateBody = (schema: ObjectSchema) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const { error, value } = schema.validate(req.body, { abortEarly: false, stripUnknown: true });
    if (error) {
      return res.status(400).json({ success: false, message: "Validation error", errors: error.details });
    }
    req.body = value;
    next();
  };
};

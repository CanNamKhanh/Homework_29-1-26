import { NextFunction, Request, Response } from "express";
import { ZodObject } from "zod";

export const validate = (schema: ZodObject) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    const body = await schema.safeParseAsync(req.body);
    if (!body.success) {
      return res.status(400).json({
        message: "Validate Failed",
        errors: body.error.issues,
      });
    }
    req.body = body.data;

    // console.log(body);

    next();
  };
};

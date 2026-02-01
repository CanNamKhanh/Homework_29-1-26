import { Request, Response } from "express";
import { authResponse } from "../utils/response.util";

export const authController = {
  create: (req: Request, res: Response) => {
    try {
      authResponse.create(req.body);
      res.json({
        success: true,
        message: "Register Success",
        data: req.body,
      });
    } catch (error: unknown) {
      if (error instanceof Error) {
        if (error.message === "User already exists") {
          return res.status(409).json({
            success: false,
            message: "User already exists",
          });
        }
      }
    }
  },

  login: (req: Request, res: Response) => {
    try {
      const user = authResponse.login(req.body);
      res.json({
        success: true,
        message: "Login Success",
        data: {
          fullName: user.fullName,
          email: user.email,
        },
      });
    } catch (error: unknown) {
      if (error instanceof Error) {
        if (error.message === "User already exists") {
          return res.status(409).json({
            success: false,
            message: "Login Fail",
          });
        }
      }
    }
  },

  getAll: (req: Request, res: Response) => {
    const users = authResponse.getAll();
    res.json({ users });
  },

  getByEmail: (req: Request, res: Response) => {
    const { email } = req.params;

    if (!email || typeof email !== "string") {
      return res.status(400).json({
        success: false,
        message: "Email is required",
      });
    }

    const user = authResponse.getByEmail(email);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    res.json({
      success: true,
      data: {
        fullName: user.fullName,
        email: user.email,
      },
    });
  },
};

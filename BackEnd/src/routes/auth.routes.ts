import express from "express";
import { authController } from "../controllers/auth.controller";
import { validate } from "../middlewares/validate.middleware";
import { authSchema } from "../schemas/auth.schema";
import { loginSchema } from "../schemas/login.schema";

const router = express.Router();
router.post("/users/register", validate(authSchema), authController.create);
router.post("/users/login", validate(loginSchema), authController.login);
router.get("/users/:email", authController.getByEmail);

export default router;

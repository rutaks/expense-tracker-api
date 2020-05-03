import Router from "express";
import AuthController from "../controllers/AuthController";
import Validators from "../middlewares/Validators";

const router = Router();

router.post("/login", Validators.isValidAccount, AuthController.login);

router.post(
  "/register",
  Validators.isValidUser,
  Validators.userExists,
  AuthController.register
);

export default router;

import Router from "express";
import TransactionRoute from "./TransactionRoute";
import AuthRoute from "./AuthRoute";

const router = Router();

router.use("/auth", AuthRoute);
router.use("/transactions", TransactionRoute);

export default router;

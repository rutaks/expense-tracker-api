import Router from "express";
import TransactionController from "../controllers/TransactionController";
import Validators from "../middlewares/Validators";
import isLoggedIn from "../middlewares/isLoggedIn";

const router = Router();

router.get("/", isLoggedIn, TransactionController.getTransactions);

router.post(
  "/",
  isLoggedIn,
  Validators.isValidTransaction,
  TransactionController.addTransaction
);

router.delete(
  "/:transactionId",
  isLoggedIn,
  TransactionController.removeTransaction
);

export default router;

import Router from "express";
import TransactionController from "../controllers/TransactionController";
import Validators from "../middlewares/Validators";

const router = Router();

router.get("/", TransactionController.getTransactions);

router.post(
  "/",
  Validators.isValidTransaction,
  TransactionController.addTransaction
);

router.delete("/:transactionId", TransactionController.removeTransaction);

export default router;

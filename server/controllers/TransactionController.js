import TransactionDAL from "../db/dal/TransactionDAL";
import ResponseUtil from "../utils/ResponseUtil";
import InvalidActionError from "../errors/InvalidActionError";
import ErrorHandler from "../utils/ErrorHandler";
import User from "../db/models/User";

export default class TransactionController {
  static async getTransactions(req, res) {
    const { username } = req.decoded;
    const foundUser = await User.findOne({ username: username });
    const transactions = await TransactionDAL.getTransactions(foundUser.id);
    ResponseUtil.sendOK(res, "Transactions Found Successfully", transactions);
  }

  static async addTransaction(req, res) {
    try {
      const { username } = req.decoded;
      const foundUser = await User.findOne({ username: username });
      const createdTransaction = await TransactionDAL.addTransaction(
        req.body,
        foundUser.id
      );
      ResponseUtil.sendOK(
        res,
        "Transaction Added Successfully",
        createdTransaction
      );
    } catch (error) {
      ErrorHandler.handleError(error, res);
      throw new InvalidActionError(error);
    }
  }

  static async removeTransaction(req, res) {
    try {
      const { transactionId } = req.params;
      const { username } = req.decoded;
      const foundUser = await User.findOne({ username: username });
      await TransactionDAL.removeTransaction(transactionId, foundUser.id);
      ResponseUtil.sendOK(
        res,
        "Transaction Removed Successfully",
        transactionId
      );
    } catch (error) {
      ErrorHandler.handleError(error, res);
      throw new InvalidActionError(error.message);
    }
  }
}

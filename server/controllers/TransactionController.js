import TransactionDAL from '../db/dal/TransactionDAL';
import ResponseUtil from '../utils/ResponseUtil';
import InvalidActionError from '../errors/InvalidActionError';

export default class TransactionController {
  static getTransactions(req, res) {
    const transactions = TransactionDAL.getTransactions();
    ResponseUtil.sendOK(res, 'Transactions Found Successfully', transactions);
  }

  static addTransaction(req, res) {
    try {
      const createdTransaction = TransactionDAL.addTransaction(req.body);
      ResponseUtil.sendOK(
        res,
        'Transaction Added Successfully',
        createdTransaction
      );
    } catch (error) {
      throw new InvalidActionError(error);
    }
  }

  static removeTransaction(req, res) {
    try {
      const { transactionId } = req.params;
      TransactionDAL.removeTransaction(transactionId);
    } catch (error) {
      throw new InvalidActionError(error.message);
    }
  }
}

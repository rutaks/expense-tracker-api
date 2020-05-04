import EntityNotFoundError from "../../errors/EntityNotFoundError";
import Transaction from "../models/Transaction";

let transactions = [
  {
    id: 1,
    description: "Pizza",
    amount: -2000,
    currency: "RWF",
    date: new Date(),
  },
];
export default class TransactionDAL {
  static async addTransaction(trans, userOwnerId) {
    trans.userOwner = userOwnerId;
    const transaction = new Transaction(trans);
    await transaction.save();
    return transaction;
  }

  static async removeTransaction(transactionId = "", userOwnerId) {
    const foundTransaction = await Transaction.findOne({
      _id: transactionId,
      userOwner: userOwnerId,
    });
    if (!foundTransaction) {
      throw new EntityNotFoundError("No Transaction Found");
    }
    await Transaction.findOneAndDelete({ _id: transactionId });
  }

  static async getTransactions(userOwnerId) {
    const transactions = await Transaction.find({ userOwner: userOwnerId });
    return transactions;
  }

  static getTransactionsById(transactionId) {
    for (let i = 0; i < transactions.length; i++) {
      if (transactions[i].id == transactionId) return transactions[i];
    }
    throw new EntityNotFoundError("No Transaction Found");
  }
}

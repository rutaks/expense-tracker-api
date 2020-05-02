import EntityNotFoundError from '../../errors/EntityNotFoundError';

const transactions = [{ id: 1, name: 'Pizza', createdOn: new Date() }];
export default class TransactionDAL {
  static addTransaction(transaction) {
    transaction.createdOn = new Date();
    transactions.push(transaction);
    return transaction;
  }

  static removeTransaction(transactionId) {
    const _ = getTransactionsById(transactionId);
    transactions = transactions.filter(
      (transaction) => transaction.id !== transactionId
    );
  }

  static getTransactions() {
    return transactions;
  }

  static getTransactionsById(transactionId) {
    for (let i = 0; i < transactions.length; i++) {
      if (transactions[i].id === transactionId) return transactions[i];
    }
    throw new EntityNotFoundError('No Transaction Found');
  }
}

import transactionSchema from '../utils/validations/TransactionSchema';
import InvalidEntityError from '../errors/InvalidEntityError';

export default class Validators {
  static isValidTransaction(req, res, next) {
    const { error } = transactionSchema.validate(req.body);
    if (error) throw new InvalidEntityError(error.details[0].message);
    next();
  }
}

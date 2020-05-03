import transactionSchema from "../utils/validations/TransactionSchema";
import userSchema from "../utils/validations/UserSchema";
import loginSchema from "../utils/validations/LoginSchema";
import InvalidEntityError from "../errors/InvalidEntityError";
import User from "../db/models/User";
import DuplicateEntryError from "../errors/DuplicateEntryError";
import ResponseUtil from "../utils/ResponseUtil";

export default class Validators {
  static isValidTransaction(req, res, next) {
    const { error } = transactionSchema.validate(req.body);
    if (error) throw new InvalidEntityError(error.details[0].message);
    next();
  }

  static isValidUser(req, res, next) {
    const { error } = userSchema.validate(req.body);
    let errorMessage = "";
    if (error && error.details) errorMessage = error.details[0].message;
    else if (error) errorMessage = error;
    if (error) throw new InvalidEntityError(errorMessage);
    next();
  }

  static isValidAccount(req, res, next) {
    const { error } = loginSchema.validate(req.body);
    let errorMessage = "";
    if (error && error.details) errorMessage = error.details[0].message;
    else if (error) errorMessage = error;
    if (error) throw new InvalidEntityError(errorMessage);
    next();
  }

  static async userExists(req, res, next) {
    const { username } = req.body;
    if (await User.findOne({ username: username })) {
      return ResponseUtil.sendBadRequest(
        res,
        "User with the same username already exists "
      );
    }
    next();
  }
}

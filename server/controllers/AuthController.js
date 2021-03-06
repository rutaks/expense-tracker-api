import User from "../db/models/User";
import PasswordUtil from "../utils/PasswordUtil";
import DuplicateEntryError from "../errors/DuplicateEntryError";
import ResponseUtil from "../utils/ResponseUtil";
import TokenUtil from "../utils/TokenUtil";
import InvalidActionError from "../errors/InvalidActionError";
import EntityNotFoundError from "../errors/EntityNotFoundError";
import ErrorHandler from "../utils/ErrorHandler";

export default class AuthController {
  static async register(req, res) {
    try {
      req.body.password = PasswordUtil.hashPassword(req.body.password);
      const user = new User(req.body);
      const token = TokenUtil.generateToken({ username: user.username });
      await user.save();
      ResponseUtil.sendCreated(res, "Account Create Successfully", {
        user,
        token,
      });
    } catch (err) {
      ErrorHandler.handleError(error, res);
      throw new InvalidActionError(error.message);
    }
  }

  static async login(req, res) {
    try {
      const { username, password } = req.body;
      let user = await User.findOne({ username });
      if (!user) {
        const message = `User with username ${username} not found`;
        return ResponseUtil.sendNotFound(res, message);
      }
      let isValidPwd = PasswordUtil.isValidPassword(password, user.password);
      if (isValidPwd) {
        const token = TokenUtil.generateToken({ username: user.username });
        return ResponseUtil.sendOK(res, "Login Successful", { token });
      }
      ResponseUtil.sendNotFound(res, "Invalid Credentials");
    } catch (err) {
      ErrorHandler.handleError(error, res);
      throw new InvalidActionError(error.message);
    }
  }
}

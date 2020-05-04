import bcrypt from "bcrypt";

export default class PasswordUtil {
  static isValidPassword(password, hashedPassword) {
    return bcrypt.compareSync(password, hashedPassword);
  }

  static hashPassword(password) {
    return bcrypt.hashSync(password, 10);
  }
}

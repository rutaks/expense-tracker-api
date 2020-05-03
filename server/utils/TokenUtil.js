import jwt from "jsonwebtoken";
import env from "custom-env";
env.env();

export default class TokenUtil {
  static generateToken(user) {
    return jwt.sign(user, process.env.SECRET);
  }
}

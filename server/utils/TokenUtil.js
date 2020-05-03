import jwt from "jsonwebtoken";
import env from "custom-env";
env.env();

export default class TokenUtil {
  static generateToken(user) {
    return jwt.sign(user, process.env.JWT_SECRET);
  }

  static decodeToken(token, secretKey) {
    try {
      const decodedToken = jwt.verify(token, secretKey);
      return decodedToken;
    } catch (error) {
      throw error;
    }
  }

  static isTokenValid(req) {
    let token = "";
    if (req.headers) {
      token = req.headers["x-access-token"] || req.headers["authorization"];
    } else {
      token = req;
    }
    if (!token) return false;
    if (!token.startsWith("Bearer ")) return false;
    return true;
  }

  static getToken(req) {
    return (
      req.headers["x-access-token"] ||
      req.headers["authorization"].replace(/Bearer /g, "")
    );
  }
}

import jwt from "jsonwebtoken";
import env from "custom-env";
import ResponseUtil from "../utils/ResponseUtil";
import TokenUtil from "../utils/TokenUtil";
import InternalError from "../errors/InternalError";

env.env();

const isLoggedIn = async (req, res, next) => {
  try {
    if (!TokenUtil.isTokenValid(req)) {
      return ResponseUtil.sendUnauthorized(res, "Invalid Token");
    }
    let unDecodedToken = TokenUtil.getToken(req);
    const secret = process.env.JWT_SECRET;
    console.log(unDecodedToken);
    let token = TokenUtil.decodeToken(unDecodedToken, secret);
    req.decoded = token;
    return next();
  } catch (error) {
    ResponseUtil.sendInternalServerError(
      res,
      `Authentication Failed, Please Try Again Later: ${error}`
    );
    throw new InternalError(error);
  }
};

export default isLoggedIn;

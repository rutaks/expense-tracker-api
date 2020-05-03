import ResponseCodes from "./ResponseCodes";
import InternalError from "../errors/InternalError";

export default class ResponseUtil {
  static sendOK(res, message = "Result Found", data = {}) {
    if (typeof res === "undefined") {
      throw new InternalError("Response is not found");
    }
    return res.status(ResponseCodes.OK).json({
      status: ResponseCodes.OK,
      message: message,
      payload: data,
    });
  }

  static sendCreated(res, message = "Entity Created", data = {}) {
    if (typeof res === "undefined") {
      throw new InternalError("Response is not found");
    }
    return res.status(ResponseCodes.CREATED).json({
      status: ResponseCodes.CREATED,
      message: message,
      payload: data,
    });
  }

  static sendBadRequest(res, message = "Bad Request", data = {}) {
    return res.status(ResponseCodes.BAD_REQUEST).json({
      status: ResponseCodes.BAD_REQUEST,
      message: message,
      payload: data,
    });
  }

  static sendNotFound(res, message = "Result Not Found", data = {}) {
    return res.status(ResponseCodes.NOT_FOUND).json({
      status: ResponseCodes.NOT_FOUND,
      message: message,
      payload: data,
    });
  }
}

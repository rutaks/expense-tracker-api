import responseCodes from "../utils/ResponseCodes";
import HttpError from "./HttpError";

class InternalError extends HttpError {
  constructor(message = "Internal Error", data = {}) {
    super({
      message,
      name: "INTERNAL_SERVER_ERROR",
      statusCode: responseCodes.INTERNAL_SERVER_ERROR,
      data,
    });
    console.log(`${message}`.red.bold);
  }
}

export default InternalError;

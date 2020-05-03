import HttpError from "./HttpError";
import responseCodes from "../utils/ResponseCodes";

class DuplicateEntryError extends HttpError {
  constructor(message = "Bad request", data = {}) {
    super({
      message,
      name: "BAD_REQUEST",
      statusCode: responseCodes.BAD_REQUEST,
      data,
    });
    console.log(`${message}`.red.bold);
  }
}

export default DuplicateEntryError;

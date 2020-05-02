class HttpError extends Error {
  constructor({ message, name, statusCode, data }) {
    super(message);
    this.name = name;
    this.statusCode = statusCode;
    this.data = data;
    Error.captureStackTrace(this, HttpError);
  }
}
export default HttpError;

export default class ErrorHandler {
  static handleError(err, res) {
    const { statusCode, message } = err;
    res.status(statusCode || 400).json({
      status: statusCode || 400,
      message: message,
      payload: {},
    });
  }
}

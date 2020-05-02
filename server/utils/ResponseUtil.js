import ResponseCodes from './ResponseCodes';
import InternalError from '../errors/InternalError';

export default class ResponseUtil {
  static sendOK(res, message = 'Result Found', data = {}) {
    if (typeof res === 'undefined') {
      throw new InternalError('Response is not found');
    }
    return res.status(ResponseCodes.OK).json({
      status: ResponseCodes.OK,
      message: message,
      payload: data,
    });
  }

  static sendBadRequest(res, message = 'Result Found', data = {}) {
    return res.status(ResponseCodes.BAD_REQUEST).json({
      status: ResponseCodes.BAD_REQUEST,
      message: message,
      payload: data,
    });
  }
}

import HttpError from './HttpError';
import responseCodes from '../utils/ResponseCodes';

class InvalidActionError extends HttpError {
  constructor(message = 'Not allowed', data = {}) {
    super({
      message,
      name: 'NOT_ALLOWED',
      statusCode: responseCodes.NOT_ALLOWED,
      data,
    });
    console.log(message);
  }
}

export default InvalidActionError;

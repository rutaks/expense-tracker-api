import HttpError from './HttpError';
import responseCodes from '../utils/ResponseCodes';

class InvalidEntityError extends HttpError {
  constructor(message = 'Not Allowed', data = {}) {
    super({
      message,
      name: 'NOT_ALLOWED',
      statusCode: responseCodes.NOT_ALLOWED,
      data,
    });
  }
}

export default InvalidEntityError;

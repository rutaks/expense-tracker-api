import HttpError from './HttpError';
import responseCodes from '../utils/ResponseCodes';

class EntityNotFoundError extends HttpError {
  constructor(message = 'Bad request', data = {}) {
    super({
      message,
      name: 'NOT_FOUND',
      statusCode: responseCodes.NOT_FOUND,
      data,
    });
  }
}

export default EntityNotFoundError;

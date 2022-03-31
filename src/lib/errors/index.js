/* eslint-disable max-classes-per-file */
import ApiError from './error';
import RequestThrottledError from './throttled';

export class UnauthorizedError extends ApiError {
  constructor(message, details) {
    super(401, message, details);
  }
}

export class NotFoundError extends ApiError {
  constructor(message, details) {
    super(404, message, details);
  }
}

export { RequestThrottledError };

/**
 * @param {number} status HTTP status code
 * @param {object} err Error response body from the API
 */
ApiError.fromResponse = (status, err) => {
  const message = err?.message ?? 'Unexpected error';
  const cause = err?.error ?? undefined;
  switch (status) {
    case 401:
      return new UnauthorizedError(message, cause);
    case 404:
      return new NotFoundError(message, cause);
    case 429:
      return new RequestThrottledError(message, cause);
    default:
      return new ApiError(status, message, cause);
  }
};

export default ApiError;

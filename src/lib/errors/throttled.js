import ApiError from './error';

export default class RequestThrottledError extends ApiError {
  constructor(message, details) {
    super(429, message, details);
  }
}

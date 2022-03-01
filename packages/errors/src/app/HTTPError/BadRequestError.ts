import { HTTPError } from './HTTPError';
import { ErrorInfo } from '../errors';

export class BadRequestError extends HTTPError {
  constructor(public override readonly info: ErrorInfo) {
    super(400, 'validation error', info);
  }
}

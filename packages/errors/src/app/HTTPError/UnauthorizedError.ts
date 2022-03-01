import { HTTPError } from './HTTPError';
import { ErrorInfo } from '../errors';

export class UnauthorizedError extends HTTPError {
  constructor(public override readonly info?: ErrorInfo) {
    super(401, 'user not authorized', info);
  }
}

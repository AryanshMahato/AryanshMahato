import { HTTPError } from './HTTPError';
import { ErrorInfo } from '../errors';

export class InternalServerError extends HTTPError {
  constructor(public override readonly info?: ErrorInfo) {
    super(500, 'internal server error', info);
  }
}

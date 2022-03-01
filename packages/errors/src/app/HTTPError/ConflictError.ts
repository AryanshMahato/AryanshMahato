import { ErrorInfo } from '../errors';
import { HTTPError } from './HTTPError';

export class ConflictError extends HTTPError {
  constructor(public override readonly info: ErrorInfo) {
    super(409, 'conflict error', info);
  }
}

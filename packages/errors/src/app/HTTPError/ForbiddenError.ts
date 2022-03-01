import { HTTPError } from './HTTPError';
import { ErrorInfo } from '../errors';

export class ForbiddenError extends HTTPError {
  constructor(
    public readonly keys: string | Array<string>,
    public override readonly info: ErrorInfo
  ) {
    super(
      403,
      `${Array.isArray(keys) ? keys.join(', ') : keys} is forbidden`,
      info
    );
  }
}

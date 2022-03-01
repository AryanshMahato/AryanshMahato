import { ErrorInfo } from '../errors';

export class HTTPError extends Error {
  constructor(
    public readonly statusCode: number,
    public override readonly message: string,
    public readonly info?: ErrorInfo
  ) {
    super(message);
  }
}

import { HTTPError } from './HTTPError';
import { ErrorInfo } from '../errors';

export class NotFoundError extends HTTPError {
	constructor(
		public readonly keys: string | Array<string>,
		public readonly info: ErrorInfo
	) {
		super(
			404,
			`${Array.isArray(keys) ? keys.join(', ') : keys} not found`,
			info
		);
	}
}

import { Logger as LoggerClient } from 'winston';

export class Logger {
	constructor(private readonly client: LoggerClient) {}

	public readonly warn = (message: string, ...details: unknown[]): void => {
		this.client.warn(message);
		if (details.length) this.client.warn(JSON.stringify(details, null, 2));
	};

	public readonly log = (message: string, ...details: unknown[]): void => {
		this.client.info(message);

		if (details.length) this.client.info(JSON.stringify(details, null, 2));
	};

	public readonly error = (
		error: Error | string,
		...details: unknown[]
	): void => {
		if (error instanceof Error) {
			this.client.error(error.message);
		}
		this.client.error(error);

		if (details.length) this.client.error(JSON.stringify(details, null, 2));
	};
}

export interface ENV extends NodeJS.ProcessEnv {
	PORT: string;
	MONGO_URL: string;
	REDIS_URL: string;
}

export class EnvConfig {
	private env: ENV;

	constructor(env: ENV) {
		this.env = env;
	}

	get port(): number {
		const port = this.env.PORT;
		if (!port) {
			throw new Error('server port not available, add PORT as env variable');
		}

		return +port;
	}

	get mongoURL(): string {
		const mongoURL = this.env.MONGO_URL;

		if (!mongoURL) {
			throw new Error('mongo URL not found, add MONGO_URL as env variable');
		}

		return mongoURL;
	}

	get redisURL(): string {
		const redisURL = this.env.REDIS_URL;

		if (!redisURL) {
			throw new Error('redis URL not found, add REDIS_URL as env variable');
		}

		return redisURL;
	}
}

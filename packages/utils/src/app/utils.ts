import {Logger} from './logger';
import {nanoid} from 'nanoid';

export class Utils {
  constructor(public readonly logger: Logger) {}

  public readonly generateId = (): string => {
    const uniqueId = nanoid(8);
    this.logger.log(`uniqueId generated: ${uniqueId}`);
    return uniqueId;
  };
}

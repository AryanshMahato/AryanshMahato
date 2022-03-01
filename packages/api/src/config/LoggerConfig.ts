import { format, LoggerOptions, transports } from 'winston';
import * as morgan from 'morgan';
import * as fs from 'fs';

export class LoggerConfig {
  private static logFormatter = format.printf((info) => {
    const { timestamp, level, stack, message } = info;
    const formattedMessage = stack || message;
    return `${timestamp} ${level}: ${formattedMessage}`;
  });

  public static get winstonLoggerConfig(): LoggerOptions {
    return {
      level: 'info',
      format: format.errors({ stack: true }),
      transports: [
        new transports.Console({
          format: format.combine(
            format.colorize(),
            format.simple(),
            format.timestamp(),
            this.logFormatter
          ),
        }),
        new transports.File({
          level: 'info',
          filename: 'info.log',
          format: format.json(),
        }),
        new transports.File({
          level: 'error',
          filename: 'error.log',
          format: format.json(),
        }),
        new transports.File({
          level: 'warn',
          filename: 'warn.log',
          format: format.json(),
        }),
      ],
    };
  }

  public static httpLoggerFormat: morgan.FormatFn = (tokens, req, res) => {
    const remoteAddress = tokens['remote-addr'](req, res);
    const url = tokens.url(req, res);
    const method = tokens.method(req, res);
    const status = tokens.status(req, res);
    const responseTime = tokens['response-time'](req, res);
    const reqDate = tokens.date(req, res);
    const http = tokens['http-version'](req, res);
    const userAgent = tokens['user-agent'](req, res);

    // Used to convert date into ISO string
    const date = new Date(reqDate as string);

    return [
      remoteAddress,
      `"${date.toISOString()}"`,
      '-',
      method,
      url,
      'HTTP/' + http,
      status,
      userAgent,
      responseTime,
      'ms',
    ].join(' ');
  };

  public static get httpLoggerConfig(): morgan.StreamOptions {
    return fs.createWriteStream('./http.log', { flags: 'a' });
  }
}

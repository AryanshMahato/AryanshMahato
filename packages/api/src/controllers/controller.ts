import { Handler, Response, Router } from 'express';
import { DefaultObject, Utils } from '@aryanshmahato/utils';
import { HTTPError } from '@aryanshmahato/errors';

export enum Methods {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE',
}

export interface IRoute {
  path: string;
  method: Methods;
  handler: Handler;
  localMiddleware: Array<Handler>;
}

export abstract class Controller {
  protected _router = Router();
  public abstract basePath: string;
  protected abstract readonly routes: Array<IRoute>;
  protected abstract readonly registerRoutes: () => void;

  protected constructor(protected utils: Utils) {}

  public get router(): Router {
    this.registerRoutes();
    for (const route of this.routes) {
      switch (route.method) {
        case 'GET':
          this._router.get(route.path, ...route.localMiddleware, route.handler);
          break;
        case 'POST':
          this._router.post(
            route.path,
            ...route.localMiddleware,
            route.handler
          );
          break;
        case 'PUT':
          this._router.put(route.path, ...route.localMiddleware, route.handler);
          break;
        case 'DELETE':
          this._router.delete(
            route.path,
            ...route.localMiddleware,
            route.handler
          );
          break;
        default:
          throw new Error(
            `invalid route path: [${route.method}] ${route.path}`
          );
      }
    }

    return this._router;
  }

  protected sendSuccess(
    res: Response,
    data: DefaultObject,
    statusCode = 200,
    message = 'success'
  ): Response {
    return res.status(statusCode).json({
      message,
      data,
    });
  }

  protected sendError(res: Response, error: HTTPError): Response {
    return res
      .status(error.statusCode || 500)
      .json({ message: error.message, info: error.info });
  }
}

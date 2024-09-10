import { Request, Response } from "express";
import { injectable } from "inversify";
@injectable()
export default class BaseController {
  sendJSONResponse(res: Response, message: string | null, data: any | null) {
    const response: any = {
      code: 200,
      status: "OK",
      message,
      data,
    };
    return res.status(200).send(response);
  }

  sendErrorResponse(res: Response, err: Error) {
    return res.status(500).json({
      code: 500,
      status: "Internal Server Error",
      message: err.message,
    });
  }
}

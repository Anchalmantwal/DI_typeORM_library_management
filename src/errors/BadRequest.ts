import { GeneralError } from "./GeneralError";

export class BadRequest extends GeneralError {
  constructor(message: string) {
    super(400, "Bad Request", message);
  }
}

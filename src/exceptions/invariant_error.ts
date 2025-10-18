import { ClientError } from "./client_error.ts";

export class InvariantError extends ClientError {
  constructor(message: string) {
    super(message);
    this.name = "InvariantError";
  }
}

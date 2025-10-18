import { ClientError } from "./client_error.ts";

export class AuthorizationError extends ClientError {
  constructor(message: string) {
    super(message, 403);
    this.name = "AuthorizationError";
  }
}

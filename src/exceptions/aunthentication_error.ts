import { ClientError } from "./client_error.ts";

export class AuthenticationError extends ClientError {
  constructor(message: string) {
    super(message, 401);
    this.name = "AuthenticationError";
  }
}

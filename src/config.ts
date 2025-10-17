import "@std/dotenv";

const APP_ENV: string = Deno.env.get("APP_ENV") || "";

const ALLOWED_ORIGINS: string[] = (
  Deno.env.get("ALLOWED_ORIGIN") || ""
).split(" ");

export const config = {
  app_env: APP_ENV,
  allowed_origins: ALLOWED_ORIGINS,
};

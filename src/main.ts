import { Hono } from "hono";
import { ClientError } from "./exceptions/client_error.ts";
import { routeRegister } from "./utils/route_register.ts";
import { ContentfulStatusCode } from "hono/utils/http-status";

const app = new Hono();
export type App = typeof app;

app.get("/", (c) => {
  return c.text("Hello Hono!");
});

routeRegister(app);

app.notFound((c) => {
  return c.json({
    status: "failed",
    message: "Error 404 - Page not Found",
  }, 404);
});

app.onError((err, c) => {
  if (err instanceof ClientError) {
    return c.json({
      status: "failed",
      message: err.message,
    }, err.statusCode as ContentfulStatusCode);
  } else {
    console.log(err);

    return c.json({
      status: "failed",
      message: "Internal server error",
    }, 500);
  }
});

Deno.serve(app.fetch);

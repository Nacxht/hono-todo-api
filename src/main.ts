import { Hono } from "hono";
import { routeRegister } from "./utils/route_register.ts";

const app = new Hono();
export type App = typeof app;

app.get("/", (c) => {
  return c.text("Hello Hono!");
});

routeRegister(app);

app.notFound((c) => {
  return c.json({
    status: "error",
    message: "Error 404 - Page not Found",
  }, 404);
});

app.onError((_err, c) => {
  return c.json({
    status: "error",
    message: "An error happened",
  }, 500);
});

Deno.serve(app.fetch);

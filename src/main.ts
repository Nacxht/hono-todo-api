import { Hono } from "hono";

const app = new Hono();

app.get("/", (c) => {
  return c.text("Hello Hono!");
});

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

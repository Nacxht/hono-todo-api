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

app.notFound((c) => {
  return c.json({
    status: "error",
    message: "An Error message",
  });
});

Deno.serve(app.fetch);

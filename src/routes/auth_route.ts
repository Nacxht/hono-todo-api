import { Hono } from "hono";

export const auth = new Hono().basePath("/auth");

// registering a new user
auth.post("/register", (c) => {
  return c.text("Registering a new user");
});

// login
auth.post("/login", (c) => {
  return c.text("Login endpoint");
});

// logout
auth.delete("/logout", (c) => {
  return c.text("Logout endpoint");
});

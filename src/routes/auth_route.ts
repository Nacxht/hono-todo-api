import { Hono } from "hono";

export const authRoute = new Hono().basePath("/auth");

// registering a new user
authRoute.post("/register", (c) => {
  return c.text("Registering a new user");
});

// login
authRoute.post("/login", (c) => {
  return c.text("Login endpoint");
});

// logout
authRoute.delete("/logout", (c) => {
  return c.text("Logout endpoint");
});

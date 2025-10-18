import { Hono } from "hono";

export const user = new Hono().basePath("/user");

// get all users
user.get("/", (c) => {
  return c.text("Get all users");
});

// get existed user specifically
user.get("/:id", (c) => {
  return c.text("Get existed user specifically");
});

// create new todo
user.post("/", (c) => {
  return c.text("Create new todo");
});

// edit existed user specifically
user.patch("/:id", (c) => {
  return c.text("Edit existed user specifically");
});

// delete existed user specifically
user.delete("/:id", (c) => {
  return c.text("Delete existed user specifically");
});

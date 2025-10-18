import { Hono } from "hono";

export const todo = new Hono().basePath("/todo");

// get all todo list
todo.get("/", (c) => {
  return c.text("Get all todo");
});

// get todo specifically
todo.get("/:id", (c) => {
  return c.text("Get specific todo");
});

// create new todo
todo.post("/", (c) => {
  return c.text("Create new todo");
});

// edit existed todo specifically
todo.patch("/:id", (c) => {
  return c.text("Edit existed todo specifically");
});

// delete existed todo specifically
todo.delete("/:id", (c) => {
  return c.text("Delete existed todo specifically");
});

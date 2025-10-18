import { Hono } from "hono";

import {
  todoIdValidator,
  todoValidator,
  todoValidatorPost,
} from "../validators/todo_validator.ts";

export const todoRoute = new Hono().basePath("/todo");

// get all todo list
todoRoute.get("/", (c) => {
  return c.text("Get all todo");
});

// get todo specifically
todoRoute.get("/:id", (c) => {
  const todoId = c.req.param("id");

  return c.text("Get specific todo");
});

// create new todo
todoRoute.post("/", async (c) => {
  const body = await c.req.json();
  const { data, success } = todoValidatorPost.safeParse(body);

  if (!success) {
    //
  }

  return c.text("Create new todo");
});

// edit existed todo specifically
todoRoute.patch("/:id", async (c) => {
  const body = await c.req.json();
  const todoId = c.req.param("id");

  const todoValRes = todoValidator.safeParseAsync(body);
  const todoIdValRes = todoIdValidator.safeParseAsync(todoId);

  return c.text("Edit existed todo specifically");
});

// delete existed todo specifically
todoRoute.delete("/:id", (c) => {
  const todoId = c.req.param("id");
  const { data, success } = todoIdValidator.safeParse(todoId);

  return c.text("Delete existed todo specifically");
});

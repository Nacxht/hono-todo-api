import { Hono } from "hono";

export const userRoute = new Hono().basePath("/user");

// get all users
userRoute.get("/", (c) => {
  return c.text("Get all users");
});

// get existed user specifically
userRoute.get("/:id", (c) => {
  const userId = c.req.param("id");

  return c.text("Get existed user specifically");
});

// create new todo
userRoute.post("/", async (c) => {
  const body = await c.req.json();

  return c.text("Create new todo");
});

// edit existed user specifically
userRoute.patch("/:id", async (c) => {
  const body = await c.req.json();
  const userId = c.req.param("id");

  return c.text("Edit existed user specifically");
});

// delete existed user specifically
userRoute.delete("/:id", (c) => {
  const userId = c.req.param("id");

  return c.text("Delete existed user specifically");
});

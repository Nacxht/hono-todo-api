import type { Hono } from "hono";
import type { App } from "../main.ts";

import { auth } from "../routes/auth_route.ts";
import { todo } from "../routes/todo_route.ts";
import { user } from "../routes/user_route.ts";

const routes: Array<Hono> = [
  auth,
  todo,
  user,
];

export function routeRegister(app: App) {
  routes.forEach((route) => {
    app.route("/api", route);
  });
}

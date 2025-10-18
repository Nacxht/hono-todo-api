import * as z from "zod";

export const userIdValidator = z.uuidv4();

export const userValidator = z.object({
  name: z.string().min(3),
  role: z.enum(["admin", "user"]),
  username: z.string().min(3).max(20),
  email: z.email(),
  password: z.string().min(8),
});

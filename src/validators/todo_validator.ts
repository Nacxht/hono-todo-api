import * as z from "zod";

export const todoIdValidator = z.uuidv4();

export const todoValidatorPost = z.object({
  userId: z.uuidv4(),
  title: z.string().min(4).max(50),
  description: z.string().min(3).nullable(),
  isComplete: z.boolean(),
});

export const todoValidator = z.object({
  title: z.string().min(3).max(50),
  description: z.string().min(3).nullable(),
  isComplete: z.boolean(),
});

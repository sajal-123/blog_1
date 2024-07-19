// src/schemas/userSchema.ts
import { z } from 'zod';

export const userSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string()
    .min(2, "Email must be at least 2 characters")
    .email("Invalid email address")
    .regex(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      "Email must be a valid format"
    ),
  password: z.string().min(2, "Password must be at least 2 characters"),
});


export const signInSchema = z.object({
  email: z.string()
    .min(2, "Email must be at least 2 characters")
    .email("Invalid email address")
    .regex(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      "Email must be a valid format"
    ),
  password: z.string().min(2, "Password must be at least 6 characters"),
});

export type SignUpInput = z.infer<typeof signInSchema>;


export type User = z.infer<typeof userSchema>;



import z from "zod";

export const schema = z.object({
  email: z
    .email({ error: "Invalid Email" })
    .min(1, { message: "Email is required" }),
  password: z
    .string()
    .min(1, { message: "Password is required" })
    .min(6, { message: "Password is to short" }),
});

export type FormData = z.infer<typeof schema>;

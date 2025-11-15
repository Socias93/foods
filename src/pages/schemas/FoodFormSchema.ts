import z from "zod";

export const schema = z.object({
  id: z.string().optional(),
  name: z.string().min(1, { message: "Name is required" }),
  categoryId: z
    .string({ error: "You must choose a valid category" })
    .min(1, { message: "You must choose a category" }),
  price: z
    .number({ error: "You must write a number" })
    .min(1, { message: "Price cant be less than 1" })
    .max(20, { message: "Price cant be more than 20" }),
  numberInStock: z
    .number({ error: "You must write a number" })
    .min(1, { message: "Stock cant be less than 1" })
    .max(100, { message: "Stock cant be more than 100" }),
});

export type FormData = z.infer<typeof schema>;

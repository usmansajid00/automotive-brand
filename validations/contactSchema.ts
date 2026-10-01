import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(6, "Please enter a valid telephone number"),
  vehicle: z.string().optional(),
  message: z
    .string()
    .min(10, "Please share brief project details (min 10 chars)"),
});

export type ContactFormValues = z.infer<typeof contactSchema>;

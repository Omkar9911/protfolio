import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name.").max(80, "Name is too long."),
  email: z.string().trim().email("Please enter a valid email address."),
  company: z.string().trim().max(120, "Company name is too long.").optional().or(z.literal("")),
  message: z.string().trim().min(20, "Please add a few more details.").max(1600, "Message is too long.")
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;

import { z } from "zod";

export const contactInquirySchema = z.object({
  name: z.string().trim().min(2, "Please enter your full name."),
  email: z.string().trim().email("Enter a valid email address."),
  organisation: z.string().trim().min(2, "Please enter your organisation."),
  eventName: z.string().trim().min(2, "Please enter an event name."),
  eventType: z.enum([
    "Keynote speaking",
    "Corporate event",
    "Strategic partnership",
    "General enquiry",
  ]),
  eventDate: z.string().min(1, "Please select an event date."),
  location: z.string().trim().min(2, "Please enter the event location."),
  message: z
    .string()
    .trim()
    .min(20, "Please provide at least 20 characters.")
    .max(2000, "Your message must be under 2,000 characters."),
});

export type ContactInquiryInput = z.infer<typeof contactInquirySchema>;

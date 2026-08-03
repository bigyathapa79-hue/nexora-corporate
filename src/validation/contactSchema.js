import * as yup from "yup";

export const contactSchema = yup.object({
  name: yup
    .string()
    .required("Name is required")
    .min(3, "Minimum 3 characters"),

  email: yup
    .string()
    .email("Invalid email address")
    .required("Email is required"),

  subject: yup.string().required("Subject is required"),

  message: yup
    .string()
    .required("Message is required")
    .min(10, "Message should be at least 10 characters"),
});

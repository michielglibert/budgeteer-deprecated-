import { InferType, object, string } from "yup";

export const loginFormSchema = object({
  email: string().required("Required"),
  password: string().required("Required"),
});

export type LoginForm = InferType<typeof loginFormSchema>;

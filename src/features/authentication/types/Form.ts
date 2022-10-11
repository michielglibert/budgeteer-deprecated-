import { InferType, object, string, ref } from "yup";

export const loginFormSchema = object({
  email: string().required("Required"),
  password: string().required("Required"),
});

export type LoginForm = InferType<typeof loginFormSchema>;

export const registerFormSchema = object({
  email: string().email("Must be a valid email").required("Required"),
  password: string().required("Required"),
  repeatPassword: string()
    .required()
    .oneOf([ref("password")], "Passwords must match"),
});

export type RegisterForm = InferType<typeof registerFormSchema>;

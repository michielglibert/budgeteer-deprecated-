import { number, InferType, object } from "yup";

export const budgetSchema = object({
  budget: number().min(0).required(),
});

export type BudgetForm = InferType<typeof budgetSchema>;

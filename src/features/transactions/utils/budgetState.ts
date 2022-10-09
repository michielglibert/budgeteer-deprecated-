import { ColorType } from "native-base/lib/typescript/components/types";

export const getBudgetStateColorScheme = (
  spendingsPercentage: number
): ColorType => {
  if (spendingsPercentage >= 100) return "error";
  if (spendingsPercentage >= 95) return "warning";
  if (spendingsPercentage >= 90) return "yellow";

  return "success";
};

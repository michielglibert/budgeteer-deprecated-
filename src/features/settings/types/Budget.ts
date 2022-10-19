export interface BudgetFirestore {
  budget?: number;
}

export type Budget = {
  id: string;
} & BudgetFirestore;

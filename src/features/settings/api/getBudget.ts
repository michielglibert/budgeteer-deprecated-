import useAuth from "@/features/authentication/hooks/useAuth";
import firestore from "@react-native-firebase/firestore";
import { useQuery } from "@tanstack/react-query";
import { Budget, BudgetFirestore } from "../types";

interface Props {
  userId?: string;
}

const getBudget = async ({ userId }: Props): Promise<Budget> => {
  if (!userId) throw new Error();

  const snapshot = await firestore()
    .collection<BudgetFirestore>("budgets")
    .doc(userId)
    .get();

  if (snapshot === undefined)
    return Promise.reject("No budget found for this user");

  return { ...snapshot.data(), id: snapshot.id };
};

const getUseBudgetQKey = ({ userId }: Props) => ["settings", "budget", userId];

export const useBudget = () => {
  const { user } = useAuth();
  const userId = user?.uid;

  return useQuery(getUseBudgetQKey({ userId }), () => getBudget({ userId }));
};

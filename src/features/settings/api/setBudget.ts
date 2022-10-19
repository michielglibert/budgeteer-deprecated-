import useAuth from "@/features/authentication/hooks/useAuth";
import firestore from "@react-native-firebase/firestore";
import { useMutation } from "@tanstack/react-query";
import { useToast } from "native-base";
import { Budget, BudgetFirestore } from "../types";

type Props = MutationProps & {
  userId?: string;
};

const setBudget = async ({ budget, id, userId }: Props) => {
  if (!userId) throw new Error();

  if (id) {
    await firestore().collection<BudgetFirestore>("budgets").doc(id).update({
      budget,
    });
  } else {
    await firestore().collection<BudgetFirestore>("budgets").doc(userId).set({
      budget,
    });
  }
};

interface MutationProps {
  id: string;
  budget: number;
}

export const useBudgetMutation = () => {
  const { user } = useAuth();
  const toast = useToast();

  return useMutation(
    (props: MutationProps) =>
      setBudget({
        ...props,
        userId: user?.uid,
      }),
    {
      onSuccess: () => {
        toast.show({
          description: "Saved",
          duration: 1500,
        });
      },
    }
  );
};

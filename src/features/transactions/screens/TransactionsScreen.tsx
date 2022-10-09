import React from "react";
import { Text, VStack } from "native-base";
import { ScreenLayout } from "@/design";
import BudgetCard from "../components/BudgetCard";
import TitledList from "@/design/layout/TitledList";

export const TransactionsScreen: React.FC = () => {
  return (
    <ScreenLayout>
      <VStack space="4">
        <BudgetCard month="January" maxSpendings={600} currentSpendings={400} />
        <TitledList title="Debts for this month">
          <Text>test</Text>
        </TitledList>
      </VStack>
    </ScreenLayout>
  );
};

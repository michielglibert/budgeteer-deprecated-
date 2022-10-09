import React from "react";
import { Text, VStack } from "native-base";
import { ScreenLayout } from "@/design";
import BudgetCard from "../components/BudgetCard";
import TitledSection from "@/design/layout/TitledList";
import SingleTransaction from "../components/SingleTransaction";

export const TransactionsScreen: React.FC = () => {
  return (
    <ScreenLayout>
      <VStack space="4">
        <BudgetCard month="January" maxSpendings={600} currentSpendings={400} />
        <TitledSection title="Debts for this month">
          <VStack space="4">
            {[...Array(15).keys()].map((_, index) => (
              <SingleTransaction
                key={index}
                title="Maxime Verhoeve"
                dateTime={new Date()}
                amount={2.95}
              />
            ))}
          </VStack>
        </TitledSection>
      </VStack>
    </ScreenLayout>
  );
};

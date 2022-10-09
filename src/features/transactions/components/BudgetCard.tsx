import { HStack, Progress, Text } from "native-base";
import React from "react";
import { Card, Icon } from "@/design";
import { getBudgetStateColorScheme } from "../utils/budgetState";

interface Props {
  month: string;
  currentSpendings: number;
  maxSpendings: number;
}

const BudgetCard: React.FC<Props> = ({
  month,
  currentSpendings,
  maxSpendings,
}) => {
  const spendingsPercentage = (currentSpendings / maxSpendings) * 100;

  return (
    <Card space="3">
      <HStack space="3" justifyContent="space-between" alignItems="center">
        <Text fontSize="h2" fontWeight="bold">
          {month}
        </Text>
        <Text fontSize="large" fontWeight="medium">
          €{currentSpendings}/€{maxSpendings}
        </Text>
      </HStack>
      <Progress
        value={spendingsPercentage}
        colorScheme={getBudgetStateColorScheme(spendingsPercentage)}
      />
      <SpendingsAlert spendingPercentage={spendingsPercentage} />
    </Card>
  );
};

interface SpendingsAlertProps {
  spendingPercentage: number;
}

const SpendingsAlert: React.FC<SpendingsAlertProps> = ({
  spendingPercentage,
}) => {
  if (spendingPercentage > 100)
    return (
      <HStack space="3">
        <Icon name="close-circle" color="error.500" size={24} />
        <Text fontSize="large" fontWeight="medium" color="error.500">
          Over budget
        </Text>
      </HStack>
    );

  return (
    <HStack space="3">
      <Icon name="check-circle" color="success.500" size={24} />
      <Text fontSize="large" fontWeight="medium" color="success.500">
        Within budget
      </Text>
    </HStack>
  );
};

export default BudgetCard;

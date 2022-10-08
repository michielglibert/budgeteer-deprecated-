import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { SettingsScreen } from "@/features/settings";
import { TransactionsScreen } from "@/features/transactions";
import { RootNavigationParams } from "../types";

const Stack = createNativeStackNavigator<RootNavigationParams>();

export const StackNavigator: React.FC = () => {
  return (
    <Stack.Navigator initialRouteName="Transactions">
      <Stack.Screen name="Transactions" component={TransactionsScreen} />
      <Stack.Screen name="Settings" component={SettingsScreen} />
    </Stack.Navigator>
  );
};

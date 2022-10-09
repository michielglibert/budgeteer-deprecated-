import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { SettingsStackNavigationParams } from "../types";
import {
  SettingsBudgetScreen,
  SettingsConnectionsScreen,
  SettingsFaqScreen,
  SettingsScreen,
} from "@/features/settings";

const Stack = createNativeStackNavigator<SettingsStackNavigationParams>();

export const SettingsStackNavigator: React.FC = () => {
  return (
    <Stack.Navigator
      initialRouteName="Settings"
      screenOptions={{ animation: "slide_from_right" }}
    >
      <Stack.Screen
        name="Settings"
        component={SettingsScreen}
        options={{ headerTitle: "" }}
      />
      <Stack.Screen name="Budget" component={SettingsBudgetScreen} />
      <Stack.Screen name="Connections" component={SettingsConnectionsScreen} />
      <Stack.Screen name="FAQ" component={SettingsFaqScreen} />
    </Stack.Navigator>
  );
};

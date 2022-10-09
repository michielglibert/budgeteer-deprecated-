import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from "@react-navigation/native-stack";
import React from "react";
import { SettingsStackNavigationParams } from "../types";
import SettingsBudgetScreen from "@/features/settings/screens/SettingsBudgetScreen";
import SettingsConnectionsScreen from "@/features/settings/screens/SettingsConnectionsScreen";
import SettingsFaqScreen from "@/features/settings/screens/SettingsFaqScreen";
import { SettingsScreen } from "@/features/settings";

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

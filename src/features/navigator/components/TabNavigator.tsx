import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { RootNavigationParams } from "../types";
import { TransactionsScreen } from "@/features/transactions";
import { SettingsScreen } from "@/features/settings";
import Ionicons from "@expo/vector-icons/Ionicons";

const Tab = createBottomTabNavigator<RootNavigationParams>();

const TabNavigator: React.FC = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          switch (route.name) {
            case "Transactions":
              return (
                <Ionicons name="md-cash-outline" size={size} color={color} />
              );
            case "Settings":
              return <Ionicons name="cog-outline" size={size} color={color} />;
          }
        },
      })}
    >
      <Tab.Screen name="Transactions" component={TransactionsScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
};

export default TabNavigator;

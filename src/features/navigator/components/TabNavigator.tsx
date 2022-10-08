import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { RootNavigationParams } from "../types";
import { TransactionsScreen } from "@/features/transactions";
import { SettingsScreen } from "@/features/settings";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useTheme } from "native-base";
import { StyleSheet } from "react-native";

const Tab = createBottomTabNavigator<RootNavigationParams>();

const TabNavigator: React.FC = () => {
  const { colors, space } = useTheme();

  const style = StyleSheet.create({
    tabBarItem: {
      paddingTop: space[1],
      paddingBottom: space[2],
      height: 60,
    },
  });

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          switch (route.name) {
            case "Transactions":
              return (
                <Ionicons name="md-cash-outline" size={size} color={color} />
              );
            case "Settings":
              return <Ionicons name="cog-outline" size={size} color={color} />;
          }
        },
        tabBarActiveTintColor: colors.primary[500],
        tabBarInactiveTintColor: colors.gray[400],
        tabBarStyle: style.tabBarItem,
      })}
    >
      <Tab.Screen name="Transactions" component={TransactionsScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
};

export default TabNavigator;

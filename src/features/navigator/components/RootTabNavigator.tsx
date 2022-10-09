import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { RootTabNavigationParams } from "../types";
import { TransactionsScreen } from "@/features/transactions";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useTheme } from "native-base";
import { StyleSheet } from "react-native";
import { SettingsItem } from "@/features/settings";
import { SettingsStackNavigator } from "./SettingsStackNavigator";

const Tab = createBottomTabNavigator<RootTabNavigationParams>();

const RootTabNavigator: React.FC = () => {
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
            case "TransactionsTab":
              return (
                <Ionicons name="md-cash-outline" size={size} color={color} />
              );
            case "SettingsTab":
              return <Ionicons name="cog-outline" size={size} color={color} />;
          }
        },
        tabBarActiveTintColor: colors.primary[500],
        tabBarInactiveTintColor: colors.gray[400],
        tabBarStyle: style.tabBarItem,
      })}
    >
      <Tab.Screen
        name="TransactionsTab"
        component={TransactionsScreen}
        options={{
          headerTitle: () => (
            <SettingsItem iconName="account" title="Michiel Glibert" />
          ),
          tabBarLabel: "Transactions",
        }}
      />
      <Tab.Screen
        name="SettingsTab"
        component={SettingsStackNavigator}
        options={{ headerShown: false, tabBarLabel: "Settings" }}
      />
    </Tab.Navigator>
  );
};

export default RootTabNavigator;

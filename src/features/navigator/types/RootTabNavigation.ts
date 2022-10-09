export type RootTabNavigationParams = {
  TransactionsTab: undefined;
  SettingsTab: undefined;
};

import type { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type RootTabNavigationProps =
  NativeStackNavigationProp<RootTabNavigationParams>;

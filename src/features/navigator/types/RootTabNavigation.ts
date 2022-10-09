export type RootTabNavigationParams = {
  Transactions: undefined;
  Settings: undefined;
};

import type { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type RootTabNavigationProps =
  NativeStackNavigationProp<RootTabNavigationParams>;

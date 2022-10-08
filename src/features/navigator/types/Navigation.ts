export type RootNavigationParams = {
  Transactions: undefined;
  Settings: undefined;
};

import type { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type RootNavigationProps =
  NativeStackNavigationProp<RootNavigationParams>;

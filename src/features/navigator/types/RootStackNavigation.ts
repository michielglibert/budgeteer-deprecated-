export type RootStackNavigationParams = {
  App: undefined;
  Login: undefined;
  Register: undefined;
};

import type { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type RootStackNavigationProps =
  NativeStackNavigationProp<RootStackNavigationParams>;

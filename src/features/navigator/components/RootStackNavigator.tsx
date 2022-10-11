import { LoginScreen, RegisterScreen } from "@/features/authentication";
import useAuth from "@/features/authentication/hooks/useAuth";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { RootStackNavigationParams } from "../types/RootStackNavigation";
import RootTabNavigator from "./RootTabNavigator";

const Stack = createNativeStackNavigator<RootStackNavigationParams>();

export const RootStackNavigator: React.FC = () => {
  const { user } = useAuth();

  return (
    <Stack.Navigator initialRouteName="Login">
      {user ? (
        <Stack.Screen
          name="App"
          component={RootTabNavigator}
          options={{ headerShown: false }}
        />
      ) : (
        <>
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Register"
            component={RegisterScreen}
            options={{ headerShown: false }}
          />
        </>
      )}
    </Stack.Navigator>
  );
};

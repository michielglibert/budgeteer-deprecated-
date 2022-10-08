import { NativeBaseProvider } from "native-base";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import TabNavigator from "@/features/navigator/components/TabNavigator";
import useDefaultTheme from "@/design/hooks/useDefaultTheme";
import { StatusBar } from "expo-status-bar";

export default function App() {
  const { theme, isLoading } = useDefaultTheme();

  if (isLoading) return null;

  return (
    <NativeBaseProvider theme={theme}>
      <NavigationContainer>
        <TabNavigator />
        <StatusBar />
      </NavigationContainer>
    </NativeBaseProvider>
  );
}

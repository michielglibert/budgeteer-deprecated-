import { NativeBaseProvider } from "native-base";
import { NavigationContainer } from "@react-navigation/native";
import React, { useEffect } from "react";
import { useDefaultTheme } from "@/design";
import { RootStackNavigator } from "@/features/navigator/components/RootStackNavigator";
import "@/config/firebase";

export default function App() {
  const { theme, isLoading } = useDefaultTheme();

  if (isLoading) return null;

  return (
    <NativeBaseProvider theme={theme}>
      <NavigationContainer>
        <RootStackNavigator />
      </NavigationContainer>
    </NativeBaseProvider>
  );
}

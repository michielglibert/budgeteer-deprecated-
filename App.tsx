import { NativeBaseProvider } from "native-base";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import TabNavigator from "@/features/navigator/components/RootTabNavigator";
import { useDefaultTheme } from "@/design";

export default function App() {
  const { theme, isLoading } = useDefaultTheme();

  if (isLoading) return null;

  return (
    <NativeBaseProvider theme={theme}>
      <NavigationContainer>
        <TabNavigator />
      </NavigationContainer>
    </NativeBaseProvider>
  );
}

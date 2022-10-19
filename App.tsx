import { NativeBaseProvider } from "native-base";
import { NavigationContainer } from "@react-navigation/native";
import React, { useEffect } from "react";
import { useDefaultTheme } from "@/design";
import { RootStackNavigator } from "@/features/navigator/components/RootStackNavigator";
import "@/config/firebase";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export default function App() {
  const { theme, isLoading } = useDefaultTheme();
  const queryClient = new QueryClient();

  if (isLoading) return null;

  return (
    <NativeBaseProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <NavigationContainer>
          <RootStackNavigator />
        </NavigationContainer>
      </QueryClientProvider>
    </NativeBaseProvider>
  );
}

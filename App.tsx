import { StatusBar } from "expo-status-bar";
import { Text, StyleSheet, View } from "react-native";
import { Audio } from "expo-av";
import { VStack, NativeBaseProvider } from "native-base";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <View style={styles.container}>
          <VStack space="16">
            <Text>Test</Text>
            <Text>Test</Text>
          </VStack>
          <StatusBar style="auto" />
        </View>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, View } from "react-native";
import { Audio } from "expo-av";

export default function App() {
  const handleShow = async () => {
    const { sound } = await Audio.Sound.createAsync(
      require("./assets/fart.mp3")
    );

    sound.playAsync();
  };

  return (
    <View style={styles.container}>
      <Button title="Druk voor iets grappigs" onPress={handleShow} />
      <StatusBar style="auto" />
    </View>
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

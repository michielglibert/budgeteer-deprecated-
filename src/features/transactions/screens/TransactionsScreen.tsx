import React from "react";
import { Center } from "native-base";
import { Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { RootNavigationProps } from "@/features/navigator";

export const TransactionsScreen: React.FC = () => {
  const navigation = useNavigation<RootNavigationProps>();

  const handlePress = () => {
    navigation.navigate("Settings");
  };

  return (
    <Center flex={1}>
      <Button title="Go to settings" onPress={handlePress} />
    </Center>
  );
};

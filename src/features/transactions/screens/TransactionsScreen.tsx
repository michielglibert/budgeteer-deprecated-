import React from "react";
import { Button, Center } from "native-base";
import { useNavigation } from "@react-navigation/native";
import { RootNavigationProps } from "@/features/navigator";

export const TransactionsScreen: React.FC = () => {
  const navigation = useNavigation<RootNavigationProps>();

  const handlePress = () => {
    navigation.navigate("Settings");
  };

  return (
    <Center flex={1}>
      <Button onPress={handlePress} colorScheme="secondary">
        Go to settings
      </Button>
    </Center>
  );
};

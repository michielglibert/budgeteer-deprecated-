import React from "react";
import { Button, Center, FormControl, Input } from "native-base";
import { useNavigation } from "@react-navigation/native";
import { RootNavigationProps } from "@/features/navigator";
import Card from "@/design/components/Card";

export const TransactionsScreen: React.FC = () => {
  const navigation = useNavigation<RootNavigationProps>();

  const handlePress = () => {
    navigation.navigate("Settings");
  };

  return (
    <Center flex={1} p="4">
      <Card>
        <Button onPress={handlePress} colorScheme="primary" variant="primary">
          Go to settings
        </Button>
        <FormControl>
          <FormControl.Label>Test</FormControl.Label>
          <Input />
        </FormControl>
      </Card>
    </Center>
  );
};

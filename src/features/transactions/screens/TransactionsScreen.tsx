import React from "react";
import { Button, FormControl, Input } from "native-base";
import { useNavigation } from "@react-navigation/native";
import { RootTabNavigationProps } from "@/features/navigator";
import { Card, ScreenLayout } from "@/design";

export const TransactionsScreen: React.FC = () => {
  const navigation = useNavigation<RootTabNavigationProps>();

  const handlePress = () => {
    navigation.navigate("SettingsTab");
  };

  return (
    <ScreenLayout>
      <Card>
        <Button onPress={handlePress} colorScheme="primary" variant="primary">
          Go to settings
        </Button>
        <FormControl>
          <FormControl.Label>Test</FormControl.Label>
          <Input />
        </FormControl>
      </Card>
    </ScreenLayout>
  );
};

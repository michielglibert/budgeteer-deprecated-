import { Card, ScreenLayout, ScreenTitle } from "@/design";
import { Button, FormControl, Input, useToast } from "native-base";
import React from "react";

export const SettingsBudgetScreen: React.FC = () => {
  const toast = useToast();

  const handleSave = () => {
    toast.show({
      description: "Saved",
      duration: 1500,
    });
  };

  return (
    <ScreenLayout title="Budget setup">
      <Card space="3">
        <FormControl>
          <FormControl.Label>Amount</FormControl.Label>
          <Input value="500" />
        </FormControl>
        <Button onPress={handleSave}>Save</Button>
      </Card>
    </ScreenLayout>
  );
};

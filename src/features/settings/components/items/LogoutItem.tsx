import { Card } from "@/design";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { SettingsItem } from "./SettingsItem";

const LogoutItem: React.FC = () => {
  const navigation = useNavigation();

  const handlePress = () => {};

  return (
    <Card p="0">
      <SettingsItem
        iconName="logout"
        title="Logout"
        onPress={() => null}
        color="error.500"
      />
    </Card>
  );
};

export default LogoutItem;

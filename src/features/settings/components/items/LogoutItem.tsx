import { Card } from "@/design";
import React from "react";
import { SettingsItem } from "./SettingsItem";
import auth from "@react-native-firebase/auth";

const LogoutItem: React.FC = () => {
  const handlePress = async () => {
    await auth().signOut();
  };

  return (
    <Card p="0">
      <SettingsItem
        iconName="logout"
        title="Logout"
        onPress={handlePress}
        color="error.500"
      />
    </Card>
  );
};

export default LogoutItem;

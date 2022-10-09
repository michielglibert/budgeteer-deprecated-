import { Card } from "@/design";
import { SettingsStackNavigationProps } from "@/features/navigator";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { SettingsItem } from "./SettingsItem";

interface Props {}

const GeneralItems: React.FC<Props> = () => {
  const navigate = useNavigation<SettingsStackNavigationProps>();

  const handleBudgetSetupPress = () => {
    navigate.navigate("Budget");
  };

  const handleConnectionsPress = () => {
    navigate.navigate("Connections");
  };

  const handleFaqPress = () => {
    navigate.navigate("FAQ");
  };

  return (
    <Card p="0">
      <SettingsItem
        iconName="cog-outline"
        title="Budget setup"
        onPress={handleBudgetSetupPress}
      />
      <SettingsItem
        iconName="connection"
        title="Connections"
        onPress={handleConnectionsPress}
      />
      <SettingsItem
        iconName="help-circle"
        title="FAQ"
        onPress={handleFaqPress}
      />
    </Card>
  );
};

export default GeneralItems;

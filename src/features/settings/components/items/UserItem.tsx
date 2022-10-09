import { Card } from "@/design";
import React from "react";
import { SettingsItem } from "./SettingsItem";

interface Props {
  onPress?: () => void;
}

const UserItem: React.FC<Props> = ({ onPress }) => {
  return (
    <Card p="0">
      <SettingsItem
        iconName="account"
        title="Michiel Glibert"
        onPress={onPress}
      />
    </Card>
  );
};

export default UserItem;

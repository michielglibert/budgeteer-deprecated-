import Card from "@/design/components/Card";
import React from "react";
import SettingsItem from "./SettingsItem";

interface Props {
  onPress?: () => void;
}

const UserItem: React.FC<Props> = ({ onPress }) => {
  return (
    <Card>
      <SettingsItem
        iconName="account"
        title="Michiel Glibert"
        onPress={onPress}
      />
    </Card>
  );
};

export default UserItem;

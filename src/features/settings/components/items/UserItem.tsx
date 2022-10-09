import { Card } from "@/design";
import React from "react";
import { SettingsItem } from "./SettingsItem";

const UserItem: React.FC = () => {
  return (
    <Card p="0">
      <SettingsItem iconName="account" title="Michiel Glibert" />
    </Card>
  );
};

export default UserItem;

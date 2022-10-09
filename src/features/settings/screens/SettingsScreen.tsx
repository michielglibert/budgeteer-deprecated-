import React from "react";
import { VStack, Text, ScrollView } from "native-base";
import UserItem from "../components/items/UserItem";
import GeneralItems from "../components/items/GeneralItems";
import { SettingsStackNavigator } from "@/features/navigator";
import ScreenTitle from "@/design/components/ScreenTitle";

export const SettingsScreen: React.FC = () => {
  return (
    <ScrollView>
      <VStack p="4" space="4">
        <ScreenTitle>Settings</ScreenTitle>
        <UserItem />
        <GeneralItems />
      </VStack>
    </ScrollView>
  );
};

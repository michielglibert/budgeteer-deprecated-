import React from "react";
import { VStack, ScrollView } from "native-base";
import UserItem from "../components/items/UserItem";
import GeneralItems from "../components/items/GeneralItems";
import { ScreenLayout, ScreenTitle } from "@/design";

export const SettingsScreen: React.FC = () => {
  return (
    <ScreenLayout withScroll>
      <ScreenTitle>Settings</ScreenTitle>
      <VStack space="4">
        <UserItem />
        <GeneralItems />
      </VStack>
    </ScreenLayout>
  );
};

import { ScreenLayout } from "@/design";
import { RootStackNavigationProps } from "@/features/navigator/types/RootStackNavigation";
import { useNavigation } from "@react-navigation/native";
import { Button } from "native-base";
import React from "react";
import LoginCard from "../components/LoginCard";

interface Props {}

export const LoginScreen: React.FC<Props> = () => {
  const navigation = useNavigation<RootStackNavigationProps>();

  const handlePress = () => {
    navigation.replace("App");
  };

  return (
    <ScreenLayout alignItems="center" justify="center">
      <LoginCard />
    </ScreenLayout>
  );
};

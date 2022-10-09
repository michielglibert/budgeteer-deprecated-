import { ScreenLayout } from "@/design";
import { RootStackNavigationProps } from "@/features/navigator/types/RootStackNavigation";
import { useNavigation } from "@react-navigation/native";
import { Button } from "native-base";
import React from "react";

interface Props {}

const LoginScreen: React.FC<Props> = () => {
  const navigation = useNavigation<RootStackNavigationProps>();

  const handlePress = () => {
    navigation.replace("App");
  };

  return (
    <ScreenLayout title="Login">
      <Button onPress={handlePress}>Login</Button>
    </ScreenLayout>
  );
};

export default LoginScreen;

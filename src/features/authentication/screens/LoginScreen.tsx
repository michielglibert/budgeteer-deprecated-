import { ScreenLayout } from "@/design";
import { Image } from "native-base";
import React from "react";
import LoginCard from "../components/LoginCard";
import BudgeteerLogo from "@assets/long_logo.png";

export const LoginScreen: React.FC = () => {
  return (
    <ScreenLayout alignItems="center" justify="center">
      <Image source={BudgeteerLogo} mb={12} alt="Budgeteer logo" />
      <LoginCard />
    </ScreenLayout>
  );
};

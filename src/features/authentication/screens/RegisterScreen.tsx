import { ScreenLayout } from "@/design";
import React from "react";
import BudgeteerLogo from "@assets/long_logo.png";
import { Image } from "native-base";
import RegisterCard from "../components/RegisterCard";

export const RegisterScreen: React.FC = () => {
  return (
    <ScreenLayout alignItems="center" justify="center">
      <Image source={BudgeteerLogo} mb={12} alt="Budgeteer logo" />
      <RegisterCard />
    </ScreenLayout>
  );
};

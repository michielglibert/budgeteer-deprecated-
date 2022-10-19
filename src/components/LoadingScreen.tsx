import { ScreenLayout } from "@/design";
import { Center, Spinner } from "native-base";
import React from "react";

const LoadingScreen: React.FC = () => {
  return (
    <ScreenLayout>
      <Center h="100%">
        <Spinner size="lg" />
      </Center>
    </ScreenLayout>
  );
};

export default LoadingScreen;

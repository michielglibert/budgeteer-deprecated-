import { Text } from "native-base";
import React, { PropsWithChildren } from "react";

export const ScreenTitle: React.FC<PropsWithChildren<unknown>> = ({
  children,
}) => {
  return (
    <Text fontSize="h1" fontWeight="bold" mb="4">
      {children}
    </Text>
  );
};

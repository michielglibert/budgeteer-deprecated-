import { Text } from "native-base";
import React, { PropsWithChildren } from "react";

const ScreenTitle: React.FC<PropsWithChildren<unknown>> = ({ children }) => {
  return (
    <Text fontSize="h1" fontWeight="bold">
      {children}
    </Text>
  );
};

export default ScreenTitle;

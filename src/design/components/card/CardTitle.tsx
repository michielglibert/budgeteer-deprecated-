import { Text } from "native-base";
import React, { PropsWithChildren } from "react";

export const CardTitle: React.FC<PropsWithChildren<unknown>> = ({
  children,
}) => {
  return (
    <Text fontWeight="bold" fontSize="h3">
      {children}
    </Text>
  );
};

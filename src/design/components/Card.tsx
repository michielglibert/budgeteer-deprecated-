import { Box } from "native-base";
import { InterfaceBoxProps } from "native-base/lib/typescript/components/primitives/Box";
import React, { PropsWithChildren } from "react";

const Card: React.FC<PropsWithChildren<InterfaceBoxProps>> = ({
  children,
  ...props
}) => {
  return (
    <Box p="3" shadow="level1" bg="white" w="100%" borderRadius="lg" {...props}>
      {children}
    </Box>
  );
};

export default Card;

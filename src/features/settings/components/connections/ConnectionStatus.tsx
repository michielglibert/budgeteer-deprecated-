import { Circle, HStack, Text } from "native-base";
import React from "react";

interface Props {
  status: "SUCCESS" | "EXPIRED" | "ERROR";
}

const ConnectionStatus: React.FC<Props> = ({ status }) => {
  const getColor = () => {
    if (status === "ERROR") return "error.500";
    if (status === "EXPIRED") return "warning.500";
    return "success.500";
  };

  const getText = () => {
    if (status === "ERROR") return "Error";
    if (status === "EXPIRED") return "Expired";
    return "Connected";
  };

  const color = getColor();
  const text = getText();

  return (
    <HStack alignItems="center" space="2">
      <Circle bg={color} size="3" />
      <Text fontWeight="medium" color={color}>
        {text}
      </Text>
    </HStack>
  );
};

export default ConnectionStatus;

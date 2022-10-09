import { HStack, Text } from "native-base";
import React from "react";

interface Props {
  title?: string;
  value?: string;
}

export const KeyValue: React.FC<Props> = ({ title, value }) => {
  return (
    <HStack space="1">
      <Text fontWeight="medium">{title}</Text>
      <Text fontWeight="medium" color="gray.400">
        {value}
      </Text>
    </HStack>
  );
};

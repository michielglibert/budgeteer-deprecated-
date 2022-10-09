import { Text, VStack } from "native-base";
import React, { PropsWithChildren } from "react";

interface Props {
  title: string;
  description: string;
}

const TextSection: React.FC<PropsWithChildren<Props>> = ({
  title,
  description,
}) => {
  return (
    <VStack>
      <Text fontSize="large" fontWeight="bold">
        {title}
      </Text>
      <Text>{description}</Text>
    </VStack>
  );
};

export default TextSection;

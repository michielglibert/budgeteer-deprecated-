import { Text, VStack } from "native-base";
import React, { PropsWithChildren } from "react";

interface Props {
  title: string;
}

const TitledSection: React.FC<PropsWithChildren<Props>> = ({
  title,
  children,
}) => {
  return (
    <VStack space={1}>
      <Text fontWeight="semibold" fontSize="large">
        {title}
      </Text>
      {children}
    </VStack>
  );
};

export default TitledSection;

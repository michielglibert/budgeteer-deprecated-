import { Pressable, Stack } from "native-base";
import { InterfaceStackProps } from "native-base/lib/typescript/components/primitives/Stack/Stack";
import React, { PropsWithChildren } from "react";

const CardContainer: React.FC<PropsWithChildren<InterfaceStackProps>> = ({
  children,
  ...props
}) => {
  return (
    <Stack
      direction="column"
      p="3"
      shadow="level1"
      bg="white"
      w="100%"
      borderRadius="lg"
      overflow="hidden"
      {...props}
    >
      {children}
    </Stack>
  );
};

interface Props {
  onPress?: () => void;
}

export const Card: React.FC<PropsWithChildren<InterfaceStackProps & Props>> = ({
  onPress,
  children,
  ...props
}) => {
  if (onPress) {
    <Pressable onPress={onPress}>
      <CardContainer {...props}>{children}</CardContainer>
    </Pressable>;
  }

  return <CardContainer {...props}>{children}</CardContainer>;
};

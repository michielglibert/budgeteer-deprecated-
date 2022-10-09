import { Flex, ScrollView } from "native-base";
import React, { PropsWithChildren } from "react";

const ScreenLayoutComponent: React.FC<PropsWithChildren<unknown>> = ({
  children,
}) => {
  return (
    <Flex flexGrow={1} p="4" bg="amber.100" h="100%">
      {children}
    </Flex>
  );
};

interface Props {
  withScroll?: boolean;
}

export const ScreenLayout: React.FC<PropsWithChildren<Props>> = ({
  withScroll,
  children,
}) => {
  if (withScroll) {
    <ScrollView h="100%">
      <ScreenLayoutComponent>{children}</ScreenLayoutComponent>
    </ScrollView>;
  }

  return <ScreenLayoutComponent>{children}</ScreenLayoutComponent>;
};

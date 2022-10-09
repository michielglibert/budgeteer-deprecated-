import { Flex, ScrollView } from "native-base";
import React, { PropsWithChildren } from "react";
import { ScreenTitle } from "../components";

interface ScreenLayoutComponentProps {
  title?: string;
}

const ScreenLayoutComponent: React.FC<
  PropsWithChildren<ScreenLayoutComponentProps>
> = ({ title, children }) => {
  return (
    <Flex flexGrow={1} p="4" bg="base.background" h="100%">
      {title && <ScreenTitle>{title}</ScreenTitle>}
      {children}
    </Flex>
  );
};

interface Props {
  withScroll?: boolean;
}

export const ScreenLayout: React.FC<
  PropsWithChildren<Props & ScreenLayoutComponentProps>
> = ({ withScroll = true, children, ...props }) => {
  if (withScroll) {
    return (
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <ScreenLayoutComponent {...props}>{children}</ScreenLayoutComponent>
      </ScrollView>
    );
  }

  return <ScreenLayoutComponent {...props}>{children}</ScreenLayoutComponent>;
};

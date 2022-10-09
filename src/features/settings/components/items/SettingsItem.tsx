import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { HStack, Pressable, Text, useTheme } from "native-base";
import { ColorType } from "native-base/lib/typescript/components/types";
import { Icon } from "@/design";

interface Props {
  iconName: keyof typeof MaterialCommunityIcons.glyphMap;
  title: string;
  color?: ColorType;
  onPress?: () => void;
  isNavigable?: boolean;
}

export const SettingsItem: React.FC<Props> = ({
  iconName,
  title,
  color = "base.fontColor",
  onPress,
  isNavigable,
}) => {
  return (
    <Pressable onPress={onPress}>
      {({ isPressed }) => (
        <HStack
          direction="row"
          justifyContent="space-between"
          space="3"
          py="3"
          px="3"
          bg={onPress && isPressed ? "gray.100" : "white"}
        >
          <HStack space="3">
            <Icon name={iconName} color={color} size={24} />
            <Text fontWeight="medium" color={color}>
              {title}
            </Text>
          </HStack>
          {isNavigable && (
            <Icon name="chevron-right" color="primary.500" size={24} />
          )}
        </HStack>
      )}
    </Pressable>
  );
};

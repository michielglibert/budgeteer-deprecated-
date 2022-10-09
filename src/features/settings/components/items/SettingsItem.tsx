import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { HStack, Pressable, Text, useTheme } from "native-base";

interface Props {
  iconName: keyof typeof MaterialCommunityIcons.glyphMap;
  title: string;
  onPress?: () => void;
}

export const SettingsItem: React.FC<Props> = ({ iconName, title, onPress }) => {
  const { colors } = useTheme();

  return (
    <Pressable onPress={onPress}>
      {({ isPressed }) => (
        <HStack
          direction="row"
          justifyContent="space-between"
          space="3"
          py="3"
          px="3"
          bg={isPressed ? "gray.100" : "white"}
        >
          <HStack space="3">
            <MaterialCommunityIcons
              name={iconName}
              color={colors.base.fontColor}
              size={24}
            />
            <Text fontWeight="medium">{title}</Text>
          </HStack>
          {onPress && (
            <MaterialCommunityIcons
              name="chevron-right"
              color={colors.primary[500]}
              size={24}
            />
          )}
        </HStack>
      )}
    </Pressable>
  );
};

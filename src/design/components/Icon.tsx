import { MaterialCommunityIcons } from "@expo/vector-icons";
import { get } from "lodash";
import { useTheme } from "native-base";
import { ColorType } from "native-base/lib/typescript/components/types";
import React from "react";

interface Props {
  name: keyof typeof MaterialCommunityIcons.glyphMap;
  color?: ColorType;
  size?: number;
}

export const Icon: React.FC<Props> = ({ name, color, size }) => {
  const { colors } = useTheme();
  return (
    <MaterialCommunityIcons
      name={name}
      color={get(colors, color as string)}
      size={size}
    />
  );
};

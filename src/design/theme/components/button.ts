import { InterfaceButtonProps } from "native-base/lib/typescript/components/primitives/Button/types";

const baseStyle = {
  borderRadius: "9999px",
};

const sizes = {
  md: {
    px: 6,
    py: 3,
    _text: {
      fontSize: "md",
      fontWeight: "medium",
    },
  },
};

const variants = {
  primary: ({ colorScheme }: InterfaceButtonProps) => {
    return {
      bg: `${colorScheme}.500`,
      _text: {
        color: "white",
      },
    };
  },
  secondary: ({ colorScheme }: InterfaceButtonProps) => {
    return {
      bg: `${colorScheme}.100`,
      _text: {
        color: "white",
      },
    };
  },
};

const defaultProps = {
  variant: "primary",
};

export default {
  baseStyle,
  sizes,
  variants,
  defaultProps,
};

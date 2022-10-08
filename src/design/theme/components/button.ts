import { Dict } from "native-base/lib/typescript/theme/tools";

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
  primary: ({ colorScheme }: Dict) => {
    return {
      bg: `${colorScheme}.500`,
      _text: {
        color: "white",
      },
    };
  },
  secondary: ({ colorScheme }: Dict) => {
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

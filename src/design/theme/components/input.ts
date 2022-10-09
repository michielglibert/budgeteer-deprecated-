const baseStyle = {
  borderRadius: "md",
  bg: "white",
  borderColor: "#EDEDED",
  border: "1px solid",
  boxShadow: "level0",

  _focus: {
    _ios: {
      selectionColor: "gray.200",
    },
    _android: {
      selectionColor: "gray.200",
    },
    _disabled: {
      placeholderTextColor: "muted.700",
      _hover: {
        borderColor: "muted.300",
      },
    },
  },
};

export default {
  baseStyle,
};

import { Dict } from "native-base/lib/typescript/theme/tools";

const baseStyle = (props: Dict) => {
  const { colorScheme: c } = props;

  return {
    bg: "gray.100",
    _filledTrack: {
      bg: `${c}.500`,
    },
  };
};

const defaultProps = {
  size: "md",
};

export default {
  baseStyle,
  defaultProps,
};

import components from "./components";
import typography from "./typography";
import colors from "./colors";
import shadows from "./shadows";

const themeObject = {
  colors,
  components,
  shadows,
  ...typography,
};

export default themeObject;

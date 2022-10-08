import components from "./components";
import typography from "./typography";
import colors from "./colors";
import shadows from "./shadows";
import { extendTheme } from "native-base";

const themeObject = extendTheme({
  colors,
  components,
  shadows,
  ...typography,
});

export type ThemeType = typeof themeObject;

export default themeObject;

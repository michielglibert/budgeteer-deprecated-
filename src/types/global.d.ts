import { ThemeType } from "@/design/theme";

declare module "native-base" {
  interface ICustomTheme extends ThemeType {}
}

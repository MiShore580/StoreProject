import { createContext } from "react";
export const themes = {
  light: {
    foreground: "#000000",
    background: "#eeeeee",
  },
  dark: {
    foreground: "#eeeeee",
    background: "pink",
  },
};
const ThemeContext = createContext(null);

export default ThemeContext;

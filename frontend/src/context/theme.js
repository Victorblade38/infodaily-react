import { createContext, useContext } from "react";

//creating context
export const ThemeContext = createContext({
  themeMode,
  setThemeMode,
  darkTheme: () => {},
  lightTheme: () => {},
});

//create provider stored in a variable
export const ThemeProvider = ThemeContext.Provider;

//hook to access value
export default function useTheme() {
  return useContext(ThemeContext);
}

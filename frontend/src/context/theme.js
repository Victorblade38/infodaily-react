import { createContext, useContext } from "react";

//creating context
export const ThemeContext = createContext({
  mode: "light",
  setMode: () => {},
});

//create provider stored in a variable
export const ThemeProvider = ThemeContext.Provider;

//hook to access value
export default function useTheme() {
  return useContext(ThemeContext);
}

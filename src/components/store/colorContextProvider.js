import { createContext, useMemo, useState } from "react";

//material-ui
import { ThemeProvider, createTheme } from "@mui/material/styles";

export const ColorModeContext = createContext({
  toggleMode: () => {},
  mode: "light",
});

const themeObj = {
    light: {
        background:{
            default: "#f2f2f2"
        },
    },
    dark: {
        background: {
            default: "#000000"
        }
    }
}

export const ColorContextProvider = ({ children }) => {
  const [mode, setMode] = useState("light");

  const colorMode = useMemo(
    () => ({
        toggleMode: () => 
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light")),
        mode,
    }),
    [mode]
  );

  const theme = useMemo(() => createTheme({
    palette: {
      mode: mode,
      ...themeObj[mode]  
    },
  }), [mode]);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ColorModeContext.Provider>
  );
};

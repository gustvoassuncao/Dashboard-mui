import React, { createContext, useCallback, useContext, useMemo, useState } from "react";
import { DarktTheme, LightTheme } from "../themes";
import { ThemeProvider } from "@emotion/react";
import { Grid } from "@mui/material";

interface IthemeContextData {
    themeName: "light" | "dark";
    toggleTheme: () => void;
}

interface IappThemeProviderProps {
    children: React.ReactNode;
}

const ThemeContext = createContext({} as IthemeContextData);

// hook personalizado para retornar as propriedades thename e togglename
export const useAppThemeContext = () => {
  return useContext(ThemeContext);
};

export const AppThemeProvider: React.FC<IappThemeProviderProps> = ({ children }) => {
  const [ themeName, setThemeName ] = useState<"light" | "dark">("light");

  const toggleTheme = useCallback(()=> {
    setThemeName(oldThemeName => oldThemeName === "light" ? "dark" : "light" );
  }, []);

  const theme = useMemo(() => {
    if (themeName === "light") return LightTheme; 
        
    return DarktTheme;
  }, [themeName]);

  return (
    <ThemeContext.Provider value={{ themeName, toggleTheme }}>
      <ThemeProvider theme={theme}>
        <Grid width='100vw' height='100vh' bgcolor={theme.palette.background.default}> 
          {children}
        </Grid>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

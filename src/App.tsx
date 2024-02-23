import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes";
import { AppThemeProvider } from "./shared/contexts/ThemeContexts";
import { Sidebar } from "./shared/components";
import { DrawerProvider } from "./shared/contexts";

export const App = () => {
  return (
    <AppThemeProvider>
      <DrawerProvider>
        <BrowserRouter>
        
          <Sidebar>
            <AppRoutes />
          </Sidebar>

        </BrowserRouter>
      </DrawerProvider>
    </AppThemeProvider>
  );
};


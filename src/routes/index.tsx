// Esse aqui vai ser responsável por quando dar um export * para tudo
import { Button } from "@mui/material";
import { Routes, Route, Navigate } from "react-router-dom";
import { useDrawerContext } from "../shared/contexts";

export const AppRoutes = () => {
  // const { toggleTheme } = useAppThemeContext(); 
  const { toggleDrawerOpen } = useDrawerContext(); 


  return (
    <Routes>
      <Route path="/home-page" element={
        <Button variant='contained' color="primary" onClick={toggleDrawerOpen}>Toggle Drawer</Button>} />
      {/* <Button variant='contained' color="primary" onClick={toggleTheme}>Change Theme</Button>} /> */}
      <Route path="*" element={<Navigate to="home-page"/>} />
    </Routes>
  );
};
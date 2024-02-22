// Esse aqui vai ser responsável por quando dar um export * para tudo
import { Button } from "@mui/material";
import { Routes, Route, Navigate } from "react-router-dom";

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/home-page" element={<Button variant='contained' color="primary">Página Inicial</Button>} />
            <Route path="*" element={<Navigate to="home-page"/>} />
        </Routes>
)
};
// Esse aqui vai ser responsável por quando dar um export * para tudo
import { Routes, Route, Navigate } from "react-router-dom";

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/home-page" element={<p>Página Inicial</p>} />
            <Route path="*" element={<Navigate to="home-page"/>} />
        </Routes>
)
};
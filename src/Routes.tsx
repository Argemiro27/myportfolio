import React from "react";
import { Routes, Route, BrowserRouter as Router, Navigate } from "react-router-dom";
import { ContatoPage, InicioPage, ProjetosPage } from "./pages";

const PageRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/inicio" replace />} />
        <Route path="/inicio" element={<InicioPage />} />
        <Route path="/projetos" element={<ProjetosPage />} />
        <Route path="/contato" element={<ContatoPage />} />
      </Routes>
    </Router>
  );
};

export default PageRoutes;

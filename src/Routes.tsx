import React from "react";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import { ContatoPage, InicioPage, ProjetosPage } from "./pages";

const PageRoutes = () => {
    return(
      <Router>
        <Routes>
          <Route path="/inicio" element={<InicioPage />} />
          <Route path="/projetos" element={<ProjetosPage />} />
          <Route path="/contato" element={<ContatoPage />} />
        </Routes>
      </Router>
    )
 }
 
 export default PageRoutes;
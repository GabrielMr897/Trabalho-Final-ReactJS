import React from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./pages/home/Home.jsx";

import { Contato } from "./pages/contato/Contato.jsx";
import { Sobre } from "./pages/sobre/Sobre.jsx";
import { Descricao } from "./pages/DescricaoProduto/descricao.jsx"

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/descricao/:id" element={<Descricao />} />
        </Routes>
      </Router>
    </>
      );
    }
    
    export default App;
    
import React from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./pages/home/Home.jsx";
import { Header } from "./components/header/Header";
import { Footer } from "./components/Footer/Footer";
import { Contato } from "./pages/contato/Contato.jsx";
import { Sobre } from "./pages/sobre/Sobre.jsx";
import { Descricao } from "./pages/DescricaoProduto/descricao.jsx"
import { Categoria } from "./pages/categoria/Categoria.jsx"
import { CadastroForm } from "./pages/cadastro/Cadastro.jsx";
import { Carrinho } from "./pages/carrinho/Carrinho";

function App() {
  return (
    <>
      <Router>
    <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/quemsomos" element={<Sobre />} />
          <Route path="/descricao/:id" element={<Descricao />} />
          <Route path="/categoria/:id/:nome" element={<Categoria/>}/>
          <Route path="/cadastro" element={<CadastroForm/>}/>
          <Route path="/carrinho" element={<Carrinho/>}/>
        </Routes>
      <Footer/>
      </Router>
    </>
      );
    }
    
    export default App;
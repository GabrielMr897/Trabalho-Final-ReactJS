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
import { PainelAdmin } from "./pages/admin/Painel";
import { AdicionarCategoria } from "./pages/admin/categoria/adicionar.jsx"
import { EditarCategoria } from "./pages/admin/categoria/Editar.jsx"
import { RemoverCategoria } from "./pages/admin/categoria/Remover.jsx"
import { AdicionarProduto} from "./pages/admin/produto/Adicionar.jsx"
import { EditarProduto } from "./pages/admin/produto/Editar.jsx"
import { RemoverProduto } from "./pages/admin/produto/Remover.jsx"
import { AdicionarPedido } from "./pages/admin/pedido/Adicionar.jsx"
import { EditarPedido } from "./pages/admin/pedido/Editar.jsx"
import { RemoverPedido } from "./pages/admin/pedido/Remover.jsx"
import { EditarCliente } from "./pages/admin/cliente/Editar.jsx"
import { RemoverCliente } from "./pages/admin/cliente/Remover.jsx"
import { AdicionarFuncionario } from "./pages/admin/funcionario/Adicionar.jsx"
import { EditarFuncionario } from "./pages/admin/funcionario/Editar.jsx"
import { RemoverFuncionario } from "./pages/admin/funcionario/Remover.jsx"


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
          <Route path="/Admin" element={<PainelAdmin/>}/>
          <Route path="/Admin/categoria/adicionar" element={<AdicionarCategoria/>}/>
          <Route path="/Admin/categoria/deletar" element={<RemoverCategoria/>}/>
          <Route path="/Admin/categoria/editar" element={<EditarCategoria/>}/>
          <Route path="/Admin/funcionario/adicionar" element={<AdicionarFuncionario/>}/>
          <Route path="/Admin/funcionario/deletar"  element={<RemoverFuncionario/>}/>
          <Route path="/Admin/funcionario/editar" element={<EditarFuncionario/>}/>
          <Route path="/Admin/cliente/deletar"  element={<RemoverCliente/>}/>
          <Route path="/Admin/cliente/editar"  element={<EditarCliente/>}/>
          <Route path="/Admin/produto/adicionar" element={<AdicionarProduto/>}/>
          <Route path="/Admin/produto/deletar" element={<RemoverProduto/>}/>
          <Route path="/Admin/produto/editar" element={<EditarProduto/>}/>
          <Route path="/Admin/pedido/adicionar" element={<AdicionarPedido/>}/>
          <Route path="/Admin/pedido/deletar" element={<RemoverPedido/>}/>
          <Route path="/Admin/pedido/editar" element={<EditarPedido/>}/>
        </Routes>
      <Footer/>
      </Router>
    </>
      );
    }
    
    export default App;
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import  api  from "../../service/api.js";
import { Header } from "../../components/header/Header.jsx"
import { Footer } from "../../components/Footer/Footer.jsx";

export const Descricao = () => {
  const [produtos, setProdutos] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    api
      .get(`/produto/${id}`)
      .then((response) => {
        setProdutos(response.data)
      })
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, [id]);

  return (
    <>
      <Header/>
      <h1>{produtos.nome}</h1>
      <p>{produtos.descricao}</p>
      <button>adcionar ao carrinho</button>
      <Footer/>
    </>
  );
};




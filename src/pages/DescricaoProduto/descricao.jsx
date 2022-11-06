import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import  api  from "../../service/api.js";
import { Header } from "../../components/header/Header.jsx"
import { Footer } from "../../components/Footer/Footer.jsx";
import { CartContext } from "../../context/Cart.jsx";

export const Descricao = () => {
  const [produtos, setProdutos] = useState([]);
  const { id } = useParams();
  const { addItemCart } = useContext(CartContext);

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
      <button onClick={()=>addItemCart(
        produtos.id,
        produtos.fotoLink,
        produtos.nome,
        produtos.valor
      )}>adcionar ao carrinho</button>
      <Footer/>
    </>
  );
};




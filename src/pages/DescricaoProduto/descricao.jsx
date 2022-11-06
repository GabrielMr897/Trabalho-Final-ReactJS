import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import  api  from "../../service/api.js";
import { Header } from "../../components/header/Header.jsx"
import { Footer } from "../../components/Footer/Footer.jsx";
import { CartContext } from "../../context/Cart.jsx";
import {
  Card,
  CardImg,
  CardText,
  CardTitle,
  Container,
  Fixo,
  CardDesc
} from "../../components/Cards/Card.jsx";
import { autoprefixer } from "fontawesome";

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
        <CardTitle>{produtos.nome}</CardTitle>
      <Container>
      <Fixo key={produtos.id}>
        <CardImg src={produtos.fotoLink}></CardImg>
        <CardDesc>{produtos.descricao}</CardDesc>
       <CardText>R$ {produtos.valor}</CardText>
      {/* <Link to={`/${produtos.id}`}> */}
        <button onClick={()=>addItemCart(
          produtos.id,
          produtos.fotoLink,
          produtos.nome,
          produtos.valor
        )}>adcionar ao carrinho</button>
        {/* </Link> */}
        </Fixo>
     
        </Container>
      <Footer/>
    </>
  );
};




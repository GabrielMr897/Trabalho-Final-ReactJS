import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import  api  from "../../service/api.js"; 
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
import { Button } from "../../components/Button/botao.jsx"

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
        <CardTitle>{produtos.nome}</CardTitle>
      <Container>
      <Fixo key={produtos.id}>
        <CardImg src={produtos.fotoLink}></CardImg>
        <CardDesc>{produtos.descricao}</CardDesc>
       <CardText>R$ {produtos.valor}</CardText>
        <Button onClick={()=>addItemCart(

          produtos.id,
          produtos.fotoLink,
          produtos.nome,
          produtos.valor

        )}  backgroundColor="RGB(98, 210, 162)"
        name="Adicionar ao carrinho"
        fontSize={30}
        width="15rem"
        height="2rem"
        colorText="#ffffff"
        borderradius="6px"
        textalign="center">adcionar ao carrinho</Button>
     

        </Fixo>
     
        </Container>
   
    </>
  );
};




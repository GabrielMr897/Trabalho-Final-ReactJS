import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import api from "../../service/api.js";
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
import { Botao } from "../../components/Botao/botao.js";
import PagSeguro from "../../assets/PagSeguro.png"
import Devolucao from "../../assets/Devolucao.png"
import "./descricao.css"

export const Descricao = () => {
  const [produtos, setProdutos] = useState([]);
  const { id } = useParams();
  const { adcionandoItem } = useContext(CartContext);

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
          <Container>
          <CardTitle>{produtos.nome}</CardTitle>
          <Fixo key={produtos.id}>
          <CardImg src={produtos.fotoLink}></CardImg>
          <div>
          <CardDesc>{produtos.descricao}</CardDesc>
          <CardText>R$ {produtos.valor}</CardText>
          <Botao onClick={() => adcionandoItem(

            produtos.id,
            produtos.fotoLink,
            produtos.nome,
            produtos.valor

          )} backgroundColor="RGB(98, 210, 162)"
            name="Adicionar ao carrinho"
            fontSize={30}
            width="15rem"
            height="2rem"
            colorText="#ffffff"
            borderradius="6px"
            textalign="center">Adicionar ao carrinho</Botao>
          <div>
          </div>
          <div>
            <h2>Produto BalacoBaco</h2>
            <p>À vista no PIX com até 15% de desconto</p>
            <p>Parcelas em até 10x sem juros no cartão</p>
            <div>
              <div>
                <img src={PagSeguro} alt="PagSeguro" />
                <div>Pagamento Seguro</div>
              </div>
              <div>
                <img src={Devolucao} alt="Devolução" />
                <div>Política de devolução</div>
              </div>
            </div>
          </div>
          </div>
        </Fixo>
        </Container>
      

    </>
  );
};




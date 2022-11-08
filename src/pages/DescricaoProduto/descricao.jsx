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
  CardDesc,
} from "../../components/Cards/Card.jsx";
import { autoprefixer } from "fontawesome";
import { Botao } from "../../components/Botao/botao.js";
import PagSeguro from "../../assets/PagSeguro.png";
import Devolucao from "../../assets/Devolucao.png";
import "./descricao.css";

export const Descricao = () => {
  const [produtos, setProdutos] = useState([]);
  const { id } = useParams();
  const { adcionandoItem } = useContext(CartContext);

  useEffect(() => {
    api
      .get(`/produto/${id}`)
      .then((response) => {
        setProdutos(response.data);
      })
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, [id]);

  return (
    <>
      <Container>
        
        <Fixo key={produtos.id}>
          <CardImg src={produtos.fotoLink}></CardImg>
          <div className="direita">
          <div className="tit">{produtos.nome}</div>
            <CardDesc>{produtos.descricao}</CardDesc>
            <CardText>R$ {produtos.valor}</CardText>
            <Botao
              onClick={() =>
                adcionandoItem(
                  produtos.id,
                  produtos.fotoLink,
                  produtos.nome,
                  produtos.valor
                )
              }
              backgroundColor="RGB(98, 210, 162)"
              name="Adicionar ao carrinho"
              fontSize={30}
              width="15rem"
              height="2rem"
              colorText="#ffffff"
              borderradius="6px"
              textalign="center"
            >
              Adicionar ao carrinho
            </Botao>

            <CardDesc>Produto BalacoBaco</CardDesc>
            <div className="desc">À vista no PIX com até 15% de desconto</div>
            <div className="desc">Parcelas em até 10x sem juros no cartão</div>

            <div className="icones">
              <img className="img" src={PagSeguro} alt="PagSeguro" />
              <img className="img" src={Devolucao} alt="Devolução" />
              <h4>Pagamento Seguro</h4>
              <h4>Política de devolução</h4>
            </div>
          </div>
        </Fixo>
      </Container>
    </>
  );
};
import React, { useEffect, useState } from "react";
import {
  Card,
  CardImg,
  CardText,
  CardTitle,
  Container,
} from "../../components/Cards/Card.jsx";
import api from "../../service/api.js";

import { Link } from "react-router-dom"

export const Produtos = () => {
  const [produtos, setProduto] = useState([]);
  useEffect(() => {
    api
      .get("/produto")
      .then((response) => setProduto(response.data))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, []);

  return (
    <>
      <h1>TODOS OS PRODUTOS</h1>
      <Container>
        {produtos?.map((produto) => {
          return (
            <Card key={produto.id}>
              <CardImg src={produto.fotoLink}></CardImg>
              <CardTitle>{produto.nome}</CardTitle>
              <CardText>R$ {produto.valor}</CardText>
              <Link to={/detalhes/${produto.id}}>detalhes</Link>
            </Card>
          );
        })}
      </Container>
    </>
  );
};

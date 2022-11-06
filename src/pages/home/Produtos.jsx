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
    .then((response) => setProduto(response.data.slice(0, 2)))
    .catch((err) => {
      console.error("ops! ocorreu um erro" + err);
    });
  }, []);
  
  
  return (
    <>
      <h1>DESTAQUES</h1>
      <Container>
    
        {produtos?.map((produto) => {
              return (
                <Card key={produto.id}>
                <Link to={`/descricao/${produto.id}`}>
                  <CardImg src={produto.fotoLink}></CardImg>
                  <CardTitle>{produto.nome}</CardTitle>
                  <CardText>R$ {produto.valor}</CardText>
                  
                  </Link>
                </Card>
              );
            
        })}
      </Container>
    </>
  );
};
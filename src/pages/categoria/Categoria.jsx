import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
    Card,
    CardImg,
    CardText,
    CardTitle,
    Container,
  } from "../../components/Cards/Card.jsx";
  import { Link } from "react-router-dom"
import { Header } from "../../components/header/Header.jsx";
import { Footer } from "../../components/Footer/Footer.jsx";

import api from "../../service/api.js"


export const Categoria = () => {

    const[produtos, setProdutos] = useState([])
    const [categoria, setCategoria] = useState([])


    const { id } = useParams();



    useEffect(() => {
        api
          .get(`/categoria/${id}`)
          .then((response) => {
            setCategoria(response.data)
          })
          .catch((err) => {
            console.error("ops! ocorreu um erro" + err);
          });
      }, [id]);

      
    
    useEffect(() => {
        api
          .get(`/produto`)
          .then((response) => {
            setProdutos(response.data)
          })
          .catch((err) => {
            console.error("ops! ocorreu um erro" + err);
          });
      }, []);
 
      
        
       return (
        <>
        <Header/>

        <h1>{categoria.nome}</h1>
        <Container>
        {produtos.map((prod) => {
            if(categoria.id === prod.idCategoria) {
                return (
                    <Card key={prod.id}>
                    <Link to={`/descricao/${prod.id}`}>
                      <CardImg src={prod.fotoLink}></CardImg>
                      <CardTitle>{prod.nome}</CardTitle>
                      <CardText>R$ {prod.valor}</CardText>
                      </Link>
                    </Card>
                    )
            }
        })}
         </Container>

        <Footer/>
        </>
        )
       
      
      
      


}
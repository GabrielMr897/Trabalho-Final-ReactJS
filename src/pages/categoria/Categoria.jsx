import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

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
 
      
        
       return produtos.map((prod) => {
            if(categoria.id === prod.idCategoria) {
                return <h1 key={prod.id}>{prod.nome}</h1>
            }
        })
       
      
      
      


}
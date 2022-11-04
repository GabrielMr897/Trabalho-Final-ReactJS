import React, { useState, useEffect } from 'react';

import api from "../../service/api.js"



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
            {
            produtos?.map((produto) => {
                return(
                <> 
                
                <div key={produto.id}>
                    <h2>{produto.nome}</h2>
                    <h3>{produto.descricao}</h3>
                    <p>{produto.valor}</p>
                </div>
                </>)
            })}
        </>
        
    )
}
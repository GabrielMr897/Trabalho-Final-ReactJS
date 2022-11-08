


import { Button} from "react-bootstrap";

import { useState, useEffect } from "react"

import api from "../../../service/api.js"

import "./categoria.css"


export const RemoverCategoria = () => {
    const [categorias, setCategorias] = useState([]);
    const [id, setId] = useState();
    const [resposta, setResposta] = useState()
    useEffect(() => {
      api
        .get(`/categoria`)
        .then((response) => {
          setCategorias(response.data);
        })
        .catch((err) => {
          console.error("ops! ocorreu um erro" + err);
        });
    }, []);

    const deletarCategoria = (id) => {
      api
          .delete(`/categoria/${id}`)
          .then((response) => {
            setResposta(response.status);
          })
          .catch((err) => {
            console.error("ops! ocorreu um erro" + err);
          });
    }

   
    


    return (
        
        <>
        <h1>ESCOLHA UM DOS NOMES</h1>
        <form onSubmit={() => deletarCategoria(id)}>
     
        <select className="form-control form-control-lg" as="select" value={id} onChange={(e) => setId(e.target.value)}>
            {categorias.map((categoria) => {
              return (
                <option key={categoria.id} value={categoria.id}>
                    {categoria.nome}
                </option>
              );
            })}
          </select>
        <Button type="submit">Remover Categoria</Button>
      </form>
      </>
    );
}
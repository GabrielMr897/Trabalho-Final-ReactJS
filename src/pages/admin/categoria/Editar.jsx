

import { Button} from "react-bootstrap";

import { useState, useEffect } from "react"

import api from "../../../service/api.js"

import "./categoria.css"

export const EditarCategoria = () => {
    
    const [categorias, setCategorias] = useState([]);
    const [id, setId] = useState();
    const [descricao, setDescricao] = useState("");
    const [nome, setNome] = useState("");
    const [resposta, setResposta] = useState();

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

      const editar = (e) => {
        e.preventDefault();
        api
          .put(`/categoria/${id}`, {
            nome: nome,
            descricao: descricao
            
          })
          .then((response) => {
            setResposta(response);
          })
          .catch((err) => {
            console.error("ops! ocorreu um erro" + err);
          });
        }
    


    return (
        
        <>
        <h1>ESCOLHA UM DOS NOMES</h1>
        <form onSubmit={(e) => editar(e)}>
     
        <select className="form-control form-control-lg" as="select" value={id} onChange={(e) => setId(e.target.value)}>
            {categorias.map((categoria) => {
              return (
                <option key={categoria.id} value={categoria.id}>
                    {categoria.nome}
                </option>
              );
            })}
          </select>

    <div class="forms">
        <div class="inps">
                <input type="text" class="form-control" placeholder="Nome"  onChange={(e) => setNome(e.target.value)}/>
        </div>
        <div class="inps">
                <input type="text" class="form-control" placeholder="Descrição"  onChange={(e) => setDescricao(e.target.value)}/>
        </div>
    </div>
        <Button type="submit">Atualizar categorias</Button>
      </form>
      </>
    );
}
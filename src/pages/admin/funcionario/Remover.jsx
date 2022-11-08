
import { Button} from "react-bootstrap";

import { useState, useEffect } from "react"

import api from "../../../service/api.js"

import "./funcionario.css"

export const RemoverFuncionario = () => {
    const [funcionarios, setFuncionarios] = useState([]);
    const [id, setId] = useState();
    const [resposta, setResposta] = useState()

    useEffect(() => {
        api
          .get(`/funcionario`)
          .then((response) => {
            setFuncionarios(response.data);
          })
          .catch((err) => {
            console.error("ops! ocorreu um erro" + err);
          });
      }, []);

      const deletarFuncionario = (e) => {
        e.preventDefault();
        api
            .delete(`/funcionario/${id}`)
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
        <form onSubmit={(e) => deletarFuncionario(e)}>
     
        <select className="form-control form-control-lg" as="select" value={id} onChange={(e) => setId(e.target.value)}>
            {funcionarios.map((funcionario) => {
              return (
                <option key={funcionario.id} value={funcionario.id}>
                    {funcionario.nome}
                </option>
              );
            })}
          </select>
        <Button type="submit">Remover funcionario</Button>
      </form>
      </>
    );
}
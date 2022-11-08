
import { Button} from "react-bootstrap";

import { useState, useEffect } from "react"

import api from "../../../service/api.js"

import "./funcionario.css"


export const EditarFuncionario = () => {
    

    const [funcionarios, setFuncionarios] = useState([]);
    const [id, setId] = useState();
    const [nome, setNome] = useState("")

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

      const editar = (e) => {
    
        api
          .put(`/funcionario/${id}`, {
            nome: nome
            
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
            {funcionarios.map((funcionario) => {
              return (
                <option key={funcionario.id} value={funcionario.id}>
                    {funcionario.nome}
                </option>
              );
            })}
          </select>


          
    <div class="forms">
        <div class="inps">
                <input type="text" class="form-control" placeholder="Nome"  onChange={(e) => setNome(e.target.value)}/>
        </div>
    </div>
        <Button type="submit">Atualizar Funcionario</Button>
      </form>
      </>
    );
}
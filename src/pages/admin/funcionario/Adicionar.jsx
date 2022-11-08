import { Button} from "react-bootstrap";

import { useState, useEffect } from "react"

import api from "../../../service/api.js"

export const AdicionarFuncionario = () => {
        const [nome, setNome] = useState("")
        const [cpf, setCpf] = useState("")


    const cadastrar = (e) => {
        e.preventDefault();
    
        api
          .post("/funcionario", {
            nome: nome,
            cpf: cpf
            
          })
          .then((response) => {
            setResposta(response);
          })
          .catch((err) => {
            console.error("ops! ocorreu um erro" + err);
          });
        }

   return( <form onSubmit={(e) => cadastrar(e)}>
    <div class="forms">
        <div class="inps">
                <input type="text" class="form-control" placeholder="Nome"  onChange={(e) => setNome(e.target.value)}/>
        </div>
        <div class="inps">
                <input type="text" class="form-control" placeholder="Cpf"  onChange={(e) => setCpf(e.target.value)}/>
        </div>
    </div>
    <Button type="submit">Cadastrar Funcionário</Button>
        </form>
   )
}
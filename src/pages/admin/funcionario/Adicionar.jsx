import { Button} from "react-bootstrap";

import { useState, useEffect } from "react"

import api from "../../../service/api.js"

export const AdicionarFuncionario = () => {
        const [nome, setNome] = useState("")
        const [cpf, setCpf] = useState("")
        const[resposta, setResposta] = useState()


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

   return( 

    <>
   
   <form onSubmit={(e) => cadastrar(e)}>
    <div className="forms">
        <div className="inps">
                <input type="text" className="form-control" placeholder="Nome"  onChange={(e) => setNome(e.target.value)}/>
        </div>
        <div className="inps">
                <input type="text" className="form-control" placeholder="Cpf"  onChange={(e) => setCpf(e.target.value)}/>
        </div>
    </div>
    <Button type="submit">Cadastrar Funcionário</Button>
        </form>
        {(() => {
                
                if (resposta?.status === 201) {
                  return (
                    <>
                      <div
                        className="alert alert-primary mt-2 mb-2 "
                        role="alert"
                      >
                        Novo Funcionario Cadastrado
                      </div>
                    </>
                  );
                }
              })()}

</>
        
   )
}
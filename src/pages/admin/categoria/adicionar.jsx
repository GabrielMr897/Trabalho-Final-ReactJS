

import { Button} from "react-bootstrap";

import { useState, useEffect } from "react"

import api from "../../../service/api.js"
export const AdicionarCategoria = () => {
    const [descricao, setDescricao] = useState("");
    const [nome, setNome] = useState("");
    const [resposta, setResposta] = useState();


    const cadastrar = (e) => {
        e.preventDefault();
    
        api
          .post("/categoria", {
            nome: nome,
            descricao: descricao
            
          })
          .then((response) => {
            setResposta(response);
          })
          .catch((err) => {
            console.error("ops! ocorreu um erro" + err);
          });
    


         
      
      };
      return (
        <>
        <form onSubmit={(e) => cadastrar(e)}>
    <div className="forms">
        <div className="inps">
                <input type="text" className="form-control" placeholder="Nome"  onChange={(e) => setNome(e.target.value)}/>
        </div>
        <div className="inps">
                <input type="text" className="form-control" placeholder="Descrição"  onChange={(e) => setDescricao(e.target.value)}/>
        </div>
    </div>
    <Button type="submit">Cadastrar Categoria</Button>
        </form>

        
        {(() => {
                
                if (resposta?.status === 201) {
                  return (
                    <>
                      <div
                        className="alert alert-primary mt-2 mb-2 "
                        role="alert"
                      >
                        Nova Categoria Cadastrado
                      </div>
                    </>
                  );
                }
              })()}

        </>
      )
    
}
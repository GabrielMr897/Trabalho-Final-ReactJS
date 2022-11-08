

import { Button} from "react-bootstrap";

import { useState, useEffect } from "react"

import api from "../../../service/api.js"

import "../../cadastro/cadastro.css"


export const RemoverCliente = () => {
    const [clientes, setClientes] = useState([]);
    const [id, setId] = useState();

    useEffect(() => {
        api
          .get(`/cliente`)
          .then((response) => {
            setClientes(response.data);
          })
          .catch((err) => {
            console.error("ops! ocorreu um erro" + err);
          });
      }, []);


      const deletarCliente = (e) => {
        e.preventDefault();
        api
            .delete(`/cliente/${id}`)
            .then((response) => {
              setResposta(response.status);
            })
            .catch((err) => {
              console.error("ops! ocorreu um erro" + err);
            }).finally(() => {
              recarregar()
            });
      }
    
      const recarregar = () => {
        window.location.reload();
    }


    return (
        
        <>
        <h1>ESCOLHA UM DOS NOMES</h1>
        <form onSubmit={(e) => deletarCliente(e)}>
     
     <select className="form-control form-control-lg" as="select" value={id} onChange={(e) => setId(e.target.value)}>
            {clientes.map((cliente) => {
              return (
                <option key={cliente.id} value={cliente.id}>
                    {cliente.nome}
                </option>
              );
            })}
          </select>
        <Button type="submit">Remover cliente</Button>
      </form>
      </>
    );
}

import { Button} from "react-bootstrap";

import { useState, useEffect } from "react"

import api from "../../../service/api.js"

import "./cliente.css"

export const EditarCliente = () => {
    
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
    


    return (
        
        <>
        <h1>ESCOLHA UM DOS NOMES</h1>
        <form onSubmit={(e) => editar(e)}>
     
     <select className="form-control form-control-lg" as="select" value={id} onChange={(e) => setId(e.target.value)}>
            {clientes.map((cliente) => {
              return (
                <option key={cliente.id} value={cliente.id}>
                    {cliente.nome}
                </option>
              );
            })}
          </select>
        <Button type="submit">Atualizar Cliente</Button>
      </form>
      </>
    );
}
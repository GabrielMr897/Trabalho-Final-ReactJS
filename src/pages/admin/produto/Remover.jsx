import { Button} from "react-bootstrap";

import { useState, useEffect } from "react"

import api from "../../../service/api.js"

import "./produto.css"

export const RemoverProduto = () => {
    const [produtos, setProdutos] = useState([]);
    const [id, setId] = useState();
    const [resposta, setResposta] = useState()
    useEffect(() => {
        api
          .get(`/produto`)
          .then((response) => {
            setProdutos(response.data);
          })
          .catch((err) => {
            console.error("ops! ocorreu um erro" + err);
          });
      }, []);



      const deletarFuncionario = (e) => {
        e.preventDefault();
        api
            .delete(`/produto/${id}`)
            .then((response) => {
              setResposta(response.status);
            })
            .catch((err) => {
              console.error("ops! ocorreu um erro" + err);
            }).finally((() => {
              recarregar()
            }));
      }
    

      const recarregar = () => {
        window.location.reload();
    }


    return (
        
        <>
        <h1>ESCOLHA UM DOS NOMES</h1>
        <form onSubmit={(e) => deletarFuncionario(e)}>
     
        <select className="form-control form-control-lg" as="select" value={id} onChange={(e) => setId(e.target.value)}>
            {produtos.map((produto) => {
              return (
                <option key={produto.id} value={produto.id}>
                    {produto.nome}
                </option>
              );
            })}
          </select>
        <Button type="submit">Remover produto</Button>
      </form>
      </>
    );
}
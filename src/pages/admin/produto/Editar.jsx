
import { Button} from "react-bootstrap";

import { useState, useEffect } from "react"

import api from "../../../service/api.js"

import "./produto.css"

export const EditarProduto = () => {
    
    
    const [produtos, setProdutos] = useState([]);
    const [produtoU, setProdutoU] = useState([]);
    const [id, setId] = useState();
    const [nome, setNome] = useState("")
    const [resposta, setResposta] = useState()
    const [descricao, setDescricao] = useState("")
    const [qtdEstoque, setQtdEstoque] = useState(0)
    const [valor, setValor] = useState(0)

    console.log(produtoU)

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

      useEffect(() => {
        api
          .get(`/produto/${id}`)
          .then((response) => {
            setProdutoU(response.data);
          })
          .catch((err) => {
            console.error("ops! ocorreu um erro" + err);
          });
      }, [id]);


      
      const editar = (e) => {
        e.preventDefault();
       


        api
          .put(`/produto/${id}`, {
              dataFabricacao: produtoU.dataFabricacao,
              descricao: descricao,
              fotoLink: produtoU.fotoLink,
              idCategoria: produtoU.idCategoria,
              idFuncionario: produtoU.idFuncionario,
              nome: nome,
              id: produtoU.id,
              nomeCategoria: produtoU.nomeCategoria,
              nomeFuncionario: produtoU.nomeFuncionario,
              qtdEstoque: qtdEstoque,
              valor: valor
            
            
          })
          .then((response) => {
            console.log(response)
            setResposta(response);
          })
          .catch((err) => {
            console.log(err)          
          });
        }
    


    return (
        
        <>
        <h1>ESCOLHA UM DOS NOMES</h1>
        <form onSubmit={(e) => editar(e)}>
     
        <select className="form-control form-control-lg" as="select" value={id} onChange={(e) => setId(e.target.value)}>
            {produtos.map((produto) => {
              return (
                <option key={produto.id} value={produto.id}>
                    {produto.nome}
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
            <div class="inps">
                <input type="number" min="1" class="form-control" placeholder="Quantidade Estoque"  onChange={(e) => setQtdEstoque(e.target.value)}/>
            </div>
            <div class="inps">
                <input type="number" min="1" class="form-control" placeholder="Valor"  onChange={(e) => setValor(e.target.value)}/>
            </div>
          
       </div>
        <Button type="submit">Atualizar produto</Button>
      </form>
      </>
    );
}
import { Button} from "react-bootstrap";

import { useState, useEffect } from "react"
import "./cadastro.css"

import api from "../../service/api.js"
export const AdicionarCliente = () => {
    const [nome, setNome] = useState("");
    const [cpf, setCpf] = useState("");
    const [dataNascimento, setDataNascimento] = useState("")
    const [email, setEmail] = useState("");
    const [bairro, setBairro] = useState("")
    const [cep, setCep] = useState("")
    const [cidade, setCidade] = useState("")
    const [complemento, setComplemento] = useState("")
    const [estado, setEstado] = useState("")
    const [numero, setNumero] = useState("")
    const [rua, setRua] = useState("")
    const [usuario, setUsuario] = useState("")

    const [resposta, setResposta] = useState();


    const cadastrar = (e) => {
        e.preventDefault();
    
        api.post("/cliente", {
            cpf: cpf,
            dataNascimento: `${dataNascimento}T18:46:19Z`,
            email: email,

            endereco: {
              bairro: bairro,
              cep: cep,
              cidade: cidade,
              complemento: complemento,
              estado: estado,
              numero: numero,
              rua:  rua
            },
            nome: nome,
            usuario: usuario
            
          })
          .then((response) => {
            setResposta(response);
          })
          .catch((err) => {
            console.error("ops! ocorreu um erro" + err);
          });
      
      };

      return (
        <form onSubmit={(e) => cadastrar(e)}>
    <div className="forms">
        <div className="inps">
                <input type="text" className="form-control" placeholder="Nome"  onChange={(e) => setNome(e.target.value)}/>
        </div>
        <div className="inps">
                <input type="text" className="form-control" placeholder="Usuario"  onChange={(e) => setUsuario(e.target.value)}/>
        </div>
        <div className="inps">
                <input type="text" className="form-control" placeholder="Cpf"  onChange={(e) => setCpf(e.target.value)}/>
        </div>
        <div className="inps">
                <input type="text" className="form-control" placeholder="Email"  onChange={(e) => setEmail(e.target.value)}/>
        </div>
        <div className="inps">
                <input type="text" className="form-control" placeholder="Data de nascimento"  onChange={(e) => setDataNascimento(e.target.value)}/>
        </div>
        <div className="inps">
                <input type="text" className="form-control" placeholder="Bairro"  onChange={(e) => setBairro(e.target.value)}/>
        </div>
        <div className="inps">
                <input type="text" className="form-control" placeholder="Rua"  onChange={(e) => setRua(e.target.value)}/>
        </div>
        <div className="inps">
                <input type="text" className="form-control" placeholder="Estado"  onChange={(e) => setEstado(e.target.value)}/>
        </div>
        <div className="inps">
                <input type="text" className="form-control" placeholder="Complemento"  onChange={(e) => setComplemento(e.target.value)}/>
        </div>
        <div className="inps">
                <input type="text" className="form-control" placeholder="Numero"  onChange={(e) => setNumero(e.target.value)}/>
        </div>
        <div className="inps">
                <input type="text" className="form-control" placeholder="Cep"  onChange={(e) => setCep(e.target.value)}/>
        </div>
        <div className="inps">
                <input type="text" className="form-control" placeholder="Cidade"  onChange={(e) => setCidade(e.target.value)}/>
        </div>
    </div>
    <Button type="submit">Cadastrar Categoria</Button>
        </form>
      )
    
}
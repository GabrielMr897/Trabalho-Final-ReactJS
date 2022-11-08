import { Card } from "../../components/Cards/Card"

import { Link } from "react-router-dom"

import "./Painel.css"

export const PainelAdmin = () => {
    
    return (
        <div className="boxesPainel">
            <div className="boxPainel">
                <h3>CLIENTE</h3>
                <p>Gerenciando cliente</p>

                <ul>
                    <li>
                    <Link to="/Admin/cliente/editar">
                        Editar
                    </Link>
                    </li>
                    <li>
                    <Link to="/Admin/cliente/deletar">
                        Remover
                    </Link>
                    </li>
                </ul>
            </div>
            <div className="boxPainel">
                <h3>FUNCIONARIO</h3>
                <p>Gerenciando funcionario</p>
                <ul>
                    <li>
                    <Link to="/Admin/funcionario/adicionar">
                        Adicionar
                    </Link>
                    </li>
                    <li>
                    <Link to="/Admin/funcionario/editar">
                        Editar
                    </Link>
                    </li>
                    <li>
                    <Link to="/Admin/funcionario/deletar">
                        Remover
                    </Link>
                    </li>
                </ul>
                
            </div>
            <div className="boxPainel">
                <h3>PRODUTO</h3>
                <p>Gerenciando produto</p>
                <ul>
                    <li>
                    <Link to="/Admin/produto/editar">
                        Editar
                    </Link>
                    </li>
                    <li>
                    <Link to="/Admin/produto/deletar">
                        Remover
                    </Link>
                    </li>
                </ul>
                
            </div>
            <div className="boxPainel">
                <h3>CATEGORIA</h3>
                <p>Gerenciando categoria</p>

                <ul>
                    <li>
                    <Link to="/Admin/categoria/adicionar">
                        Adicionar
                    </Link>
                    </li>
                    <li>
                    <Link to="/Admin/categoria/editar">
                        Editar
                    </Link>
                    </li>
                    <li>
                    <Link to="/Admin/categoria/deletar">
                        Remover
                    </Link>
                    </li>
                </ul>
            </div>
        </div>    
        
    )
}
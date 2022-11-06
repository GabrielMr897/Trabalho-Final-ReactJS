
import { Link } from "react-router-dom"

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import api from "../../service/api.js"

export const Navbar = () => {


    const [MobileMenu, setMobileMenu] = useState(false)
    const [categoria, setCategoria] = useState([])



    useEffect(() => {
        api
          .get(`/categoria/`)
          .then((response) => {
            console.log(response.data)
            setCategoria(response.data)
          })
          .catch((err) => {
            console.error("ops! ocorreu um erro" + err);
          });
      }, []);


    return (
        <header className="header">
            <div className="container d_c_flex">
                <div className="navlink">
                    <ul className={MobileMenu ? "nav-links-mobile" : "link f_flex capitalize"} onClick={() => setMobileMenu(false)}>

                        <li>
                            <Link to="/">
                                    INÍCIO
                            </Link>
                            
                        </li>
                        {categoria?.map((cat) => {
                          return(  
                            <li key={cat.id}>
                                <Link to={`/categoria/${cat.id}`}>
                                    {cat.nome}    
                                </Link>    
                            </li>
                            
                            )
                        })}

                        
                        
                    </ul>

                    <button className="toggle" onClick={() => setMobileMenu(!MobileMenu)}>
                        {
                            MobileMenu ? <i className="fas fa-times close home-bth"></i> :
                            <i className="fas fa-bars open"></i>
                        }
                    </button>
                </div>
            </div>
        </header>
    );
}
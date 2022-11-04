
import React, { useState } from "react"
import { Link } from "react-router-dom"

export const Navbar = () => {


    const [MobileMenu, setMobileMenu] = useState(false)


    return (
        <header className="header">
            <div className="container d_c_flex">
                <div className="navlink">
                    <ul className={MobileMenu ? "nav-links-mobile" : "link f_flex capitalize"} onClick={() => setMobileMenu(false)}>
                        <li>
                             <Link to="/">Início</Link> 
                        </li>

                        <li>
                             <Link to="/sobre">Sobre nós</Link> 
                        </li>
                        <li>
                             <Link to="/contato">Contato</Link> 
                        </li>

                        
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
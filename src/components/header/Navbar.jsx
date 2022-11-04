
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
                             <Link to="/">home</Link> 
                        </li>
                        <li>
                             <Link to="/pages">pages</Link> 
                        </li>
                        <li>
                             <Link to="/user">user account</Link> 
                        </li>
                        <li>
                             <Link to="/vendor">vendor account</Link> 
                        </li>
                        <li>
                             <Link to="/track">track my order</Link> 
                        </li>
                        
                        <li>
                             <Link to="/contact">contact</Link> 
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
import React from "react";
import Logo from "../../assets/bpng.png"
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../context/Cart";

export const Search = () => {
  window.addEventListener("scroll", function () {
    const search = document.querySelector(".busca");
    search.classList.toggle("active", window.scrollY > 100);
  });

  const {produtoCarrinho} = useContext(CartContext)

  return (
    <>
      <section className="busca container">
       
          <div className="logo width">
            <Link to="/">
            
            <img src={Logo} alt="" />
            </Link>
          </div>

          <div className="busca-box f_flex">
            <i className="fa fa-search"></i>
            <input type="text" placeholder="Busque seu produto do balacobaco" />
            <span></span>
          </div>

          <div className="icon f_flex width">
            <Link to="/cadastro" className="linkIcon">
            
            <i className="fa fa-user icon-circle"></i>
            </Link>
            <div className="carrinho">
              <Link to="/carrinho" className="linkIcon">
                <i className="fa-solid fa-cart-shopping icon-circle"></i>
                <span>{produtoCarrinho.length}</span>
              </Link>
            </div>
          </div>
      </section>
    </>
  );
};

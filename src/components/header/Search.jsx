import React from "react";
import Logo from "../../assets/bpng.png"
import { Link } from "react-router-dom";

export const Search = () => {
  window.addEventListener("scroll", function () {
    const search = document.querySelector(".search");
    search.classList.toggle("active", window.scrollY > 100);
  });

  return (
    <>
      <section className="search">
        <div className="container c_flex">
          <div className="logo width">
            <img src={Logo} alt="" />
          </div>

          <div className="search-box f_flex">
            <i className="fa fa-search"></i>
            <input type="text" placeholder="Search and hit enter" />
            <span>All category</span>
          </div>

          <div className="icon f_flex width">
            <i className="fa fa-user icon-circle"></i>
            <div className="cart">
              <Link>
                <i className="fa-solid fa-cart-shopping icon-circle"></i>
                <span>0</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

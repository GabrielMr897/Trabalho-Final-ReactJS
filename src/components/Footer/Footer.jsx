import React from "react";
import Logo from "../../assets/bpng.png"
import "./Footer.css"

export const Footer = () => {

    return (
        <>

            <footer className="text-center text-lg-start bg-white text-muted">
                <section className="">
                    <div className="container text-center text-md-start mt-5">

                        <div className="mt-3 row_footer">

                            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">

                                <h6 className="text-uppercase fw-bold mb-4">
                                    <img src={Logo} alt="" className="logo_footer fas fa-gem me-3 text-secondary" />BalacoBaco
                                </h6>
                                <p>
                                    Produtos que estão dando o que falar no mercado.
                                </p>
                            </div>

                            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                                <h6 className="text-uppercase fw-bold mb-4">
                                    Produtos
                                </h6>
                                <p>
                                    <link href="#!" className="text-reset">Escritório</link>
                                </p>
                                <p>
                                    <link href="#!" className="text-reset">Informática</link>
                                </p>
                                <p>
                                    <link href="#!" className="text-reset">Livraria</link>
                                </p>
                            </div>

                            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">

                                <h6 className="text-uppercase fw-bold mb-4">
                                    Mapa do site
                                </h6>
                                <p>
                                <link href="#!" className="text-reset">Quem somos?</link>
                                </p>
                                <p>
                                    <link href="#!" className="text-reset">Página inicial</link>
                                </p>
                                <p>
                                    <link href="#!" className="text-reset">Produtos</link>
                                </p>
                            </div>

                            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">

                                <h6 className="text-uppercase fw-bold mb-4">Contato</h6>
                                <p><i className="fas fa-home me-3 text-secondary"></i>Rua BalacoBaco, N° 500 - Rio de Janeiro</p>
                                <p><i className="fas fa-envelope me-3 text-secondary"></i> balacobaco@email.com
                                </p>
                            </div>

                        </div>

                    </div>
                </section>



                <div className="text-center p-4">
                    © 2022 Copyright:
                    <a className="text-reset fw-bold" href="https://www.apache.org/licenses/LICENSE-2.0.html">BalacoBaco.com</a>
                </div>

            </footer>

        </>
    )
}
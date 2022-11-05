import React from 'react';
import { Footer } from '../../components/Footer/Footer.jsx';
import { Header } from "../../components/header/Header.jsx"
import "./Sobre.css"
import fotoJo from "../../assets/jo.png"


export const Sobre = () => {
    return (
        <>
            <Header />
            <h1>PAGINA QUEM SOMOS</h1>
            <div className="bg-light py-5">
            <div className="container py-5">
                <div className="row text-center justify-content-between">
                    <div className="col-xl-3 col-sm-6 mb-5 time">
                        <div class="bg-white rounded shadow-sm py-5 px-4 time-div">
                            <img src={fotoJo} alt="Jonathan" className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm img-time" />
                            <h5>Jonathan Marques</h5>
                            <span className="small"> Bla bla bla, eu sou Jonathan.</span>
                        </div>
                    </div>
                    <div className="col-xl-3 col-sm-6 mb-5 time">
                        <div class="bg-white rounded shadow-sm py-5 px-4 time-div">
                            <img src="" alt="" />
                            <h5>Gabriel Martins</h5>
                            <span className="small"></span>
                        </div>
                    </div>
                    <div className="col-xl-3 col-sm-6 mb-5 time">
                        <div class="bg-white rounded shadow-sm py-5 px-4 time-div">
                            <img src="" alt="" />
                            <h5>Kauan Oliveira</h5>
                            <span className="small"></span>
                        </div>
                    </div>
                </div>
                <div className="row text-center justify-content-between">
                    <div className="col-xl-3 col-sm-6 mb-5 time">
                        <div class="bg-white rounded shadow-sm py-5 px-4 time-div">
                            <img src="" alt="" />
                            <h5>Priscila Durão</h5>
                            <span className="small"></span>
                        </div>
                    </div>
                    <div className="col-xl-3 col-sm-6 mb-5 time">
                        <div class="bg-white rounded shadow-sm py-5 px-4 time-div">
                            <img src="" alt="" />
                            <h5>Maria Eduarda</h5>
                            <span className="small"></span>
                        </div>
                    </div>
                    <div className="col-xl-3 col-sm-6 mb-5 time">
                        <div class="bg-white rounded shadow-sm py-5 px-4 time-div">
                            <img src="" alt="" />
                            <h5>Roberto o que?</h5>
                            <span className="small"></span>
                        </div>
                    </div>
                </div>
            </div>
            </div>

            <Footer />
        </>
    )
}
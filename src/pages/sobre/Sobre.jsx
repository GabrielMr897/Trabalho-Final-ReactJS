import React from 'react';
import { Footer } from '../../components/Footer/Footer.jsx';
import { Header } from "../../components/header/Header.jsx"
import "./Sobre.css"
import fotoJo from "../../assets/jo.png"
import fotogab from "../../assets/gab.png"
import fotokauan from "../../assets/kauan.jpg"
import fotopri from "../../assets/priscila.jpg"
import fotoma from "../../assets/ma.jpeg"
import fotoro from "../../assets/ro.jpeg"


export const Sobre = () => {
    return (
        <>
            <Header />
            <h1>PAGINA QUEM SOMOS</h1>
            <div className="bg-light py-5">
            <div className="py-5">
                <div className="pai">
                        <div class="mini">
                            <img src={fotoJo} alt="Jonathan" className="img" />
                            <div className="h5">Jonathan Marques</div>
                            <span className="small"> Bla bla bla, eu sou Jonathan.</span>
                        </div>
                        <div class="mini">
                            <img src={fotogab} alt="Gabriel" className="img" />
                            <div className="h5">Gabriel Martins</div>
                            <span className="small">aaaaaaaaaa</span>
                        </div>
                        <div class="mini">
                            <img src={fotokauan} alt="Kauan" className="img" />
                            <div className="h5">Kauan Oliveira</div>
                            <span className="small">aaaaaaaaaaaaaaaaaaa</span>
                        </div>
                        <div class="mini">
                            <img src={fotopri} alt="Priscila" className="img"  />
                            <h5>Priscila Durão</h5>
                            <span className="small">aaaaaaaaaaaaaa</span>
                        </div>
                        <div class="mini">
                            <img src= {fotoma} alt="Maria" className="img" />
                            <div className="h5">Maria Eduarda</div>
                            <span className="small">aaaaaaaaaaaa</span>
                        </div>
                        <div class="mini">
                            <img src={fotoro} alt="Roberto" className="img"  />
                            <div className="h5">Roberto de Andrade</div>
                            <span className="small">aaaaaaaaaaaa</span>
                        </div>
                </div>
            </div>
            </div>
            
            <Footer />
        </>
    )
}
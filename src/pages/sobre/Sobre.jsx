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
            <h1>Fundadores</h1>
            <div className="bg-light py-5">
                <div className="py-5">
                    <div className="pai">
                        <div class="mini">
                            <img src={fotoJo} alt="Jonathan" className="img2" />
                            <div className="h5">Jonathan Marques</div>
                            <a className="small" href="https://github.com/JotaMarquesb" target="_blank">GITHUB</a>
                        </div>
                        <div class="mini">
                            <img src={fotogab} alt="Gabriel" className="img2" />
                            <div className="h5">Gabriel Martins</div>
                            <a className="small" href="https://github.com/GabrielMr897" target="_blank">GITHUB</a>
                        </div>
                        <div class="mini">
                            <img src={fotokauan} alt="Kauan" className="img2" />
                            <div className="h5">Kauan Oliveira</div>
                            <a className="small" href="https://github.com/KauanOliveira1" target="_blank">GITHUB</a>
                        </div>
                        <div class="mini">
                            <img src={fotopri} alt="Priscila" className="img2" />
                            <h5>Priscila Durão</h5>
                            <a className="small" href="https://github.com/Prisciladurao" target="_blank">GITHUB</a>
                        </div>
                        <div class="mini">
                            <img src={fotoma} alt="Maria" className="img2" />
                            <div className="h5">Maria Eduarda</div>
                            <a className="small" href="https://github.com/mahlynn" target="_blank">GITHUB</a>
                        </div>
                        <div class="mini">
                            <img src={fotoro} alt="Roberto" className="img2" />
                            <div className="h5">Roberto de Andrade</div>
                            <a className="small" href="https://github.com/RobertoDeAndrade" target="_blank">GITHUB</a>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
import React from "react";
import {  BsInstagram, BsGithub, BsLinkedin } from 'react-icons/bs';
import ilustracao from "../img/ilustracao.png"
import { DivHome } from "../style/styled";

export default function Home() {
    return (
        <DivHome>
        <div id="container">
            <div id="principal">
                <h1>Olá, sou o Jhonatas <span id="gradient">Desenvolvedor</span> Full-Stack</h1>
                <div id="sub-titulo">
                <p>Construindo aplicações utilizando as principais stacks do mercado de TI</p>
                </div>
                <div id="botao-cv">
                    <button>Download CV</button>
                </div>
                <div id="redes">
                    <a href="/"><BsGithub/></a>
                    <a href="/"><BsLinkedin/></a>
                    <a href="/"><BsInstagram/></a>
                </div>
            </div>
            <div id="img-principal">
                <img src={ilustracao} alt="" />
            </div>
        </div>
        </DivHome>


    )
}
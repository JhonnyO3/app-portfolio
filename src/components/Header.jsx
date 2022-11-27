import React from "react";
import { DivHeader } from "../style/styled";
import {BsCodeSlash} from 'react-icons/bs';

export default function Header() {

    const toggleMenu = (()=> {
        const nav = document.getElementById('nav')
        nav.classList.toggle('active')
    })



    return (
        <DivHeader>
            <header id="header">
                <a id="logo">PORTFOLIO</a>
                <nav id="nav">
                    <button id="btn-mobile" onClick={toggleMenu}>
                        <span id="hamburguer"></span>
                        
                    </button>
                    <ul id="menu">
                        <li><a href="/">Home</a></li>
                        <li><a href="/">Sobre</a></li>
                        <li><a href="/">Projetos</a></li>
                        <li><a href="/">Contato</a></li>
                    </ul>
                </nav>
            </header>
        </DivHeader>
    )


}
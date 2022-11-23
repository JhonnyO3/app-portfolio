import React from "react";
import { DivHome } from "../style/styled";
import { IoIosArrowDropdownCircle } from 'react-icons/io';
import { BsFacebook, BsInstagram, BsGithub, BsLinkedin } from 'react-icons/bs';

import desktop from "../img/desktop.png"

export default function Home() {
    return (
        <DivHome>
            <main id="main">
                <div id="container">
                    <div id="introducao">
                        <span id="linha"></span>
                        <h1>Sou o Jhonatas,<br /> desenvolvedor Full-Stack</h1>

                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam illo, cum aperiam mollitia adipisci voluptas sunt nam repudiandae itaque ratione consequuntur temporibus nostrum consequatur, vel ipsam sit repellendus velit! Ipsa?</p>
                        <div id="redes">
                            <ul>
                                <a href="https://www.linkedin.com/in/jhonatasols/"><BsLinkedin /></a>
                                <a href="https://github.com/JhonnyO3"><BsGithub /></a>
                                <a href="https://www.instagram.com/"><BsInstagram /></a>
                                <a href="https://www.facebook.com/jhonatas.oliveira.58152/"><BsFacebook /></a>
                            </ul>

                        </div>
                        <h1 id="arrow-down"><IoIosArrowDropdownCircle id="icon" /></h1>
                    </div>
                    <div id="image">
                        <img src={desktop} alt="" />
                    </div>
                </div>
                <div id="about-work">
                    <div id="about">
                        <h3>Sobre mim</h3>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus harum explicabo ea nemo, atque praesentium aperiam optio ex aspernatur, officia nisi eaque doloribus in deserunt nesciunt nihil, assumenda quam qui.</p>
                        <a href="">Conheça mais sobre mim  </a>
                    </div>
                    <div id="work">
                        <h3>Meu trabalho</h3>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius, est nam praesentium distinctio itaque inventore ratione veniam quos aliquid quidem reprehenderit dignissimos, possimus ipsum? Officia tenetur dicta culpa nam et.</p>
                        <a href="">Venha conferir meu trabalho  </a>
                    </div>


                </div>

            </main>
        </DivHome>

    )
}
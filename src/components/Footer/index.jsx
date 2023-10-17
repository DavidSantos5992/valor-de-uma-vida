'use client'
import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'
import './styles.css'

export default function Footer() {

    return (
        <>
            <footer className="footer">
                <div className="waves">
                    <div className="wave" id="wave1"></div>
                    <div className="wave" id="wave2"></div>
                    <div className="wave" id="wave3"></div>
                    <div className="wave" id="wave4"></div>
                </div>

                <ul className="social-icon">

                    <li className="social-icon__item"><a className="social-icon__link"
                        href="https://www.instagram.com/valordeumavida.ong/"
                        target='blank'>
                        <ion-icon name="logo-facebook">
                            <FaInstagram />
                        </ion-icon>
                    </a></li>

                    <li className="social-icon__item">
                        <a className="social-icon__link" href="https://www.facebook.com/ovalordeumavida"
                            target='blank'>
                            <FaFacebook />
                        </a>
                    </li>

                    <li className="social-icon__item">
                        <a className="social-icon__link"
                            href="#"
                        >
                            <ion-icon name="logo-linkedin">
                                <FaLinkedin />
                            </ion-icon>
                        </a>
                    </li>



                </ul>

                <ul className="menu">
                    <li className="menu__item"><a className="menu__link" href="#">Time de desenvolvimento</a></li>
                </ul>

                <p>Copyright &copy; 2023 O Valor de Uma Vida. Todos os direitos reservados.</p>
            </footer>

        </>

    );
}


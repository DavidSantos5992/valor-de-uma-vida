'use client'
import React from 'react';
import './styles.css'

export default function Footer() {

    return (
        <>
            <footer class="footer">

                <div class="waves">
                    <div class="wave" id="wave1"></div>
                    <div class="wave" id="wave2"></div>
                    <div class="wave" id="wave3"></div>
                    <div class="wave" id="wave4"></div>
                </div>

                <ul class="social-icon">
                    <li class="social-icon__item"><a class="social-icon__link" href="#">
                        <ion-icon name="logo-facebook"></ion-icon>
                    </a></li>
                  
                    <li class="social-icon__item"><a class="social-icon__link" href="#">
                        <ion-icon name="logo-linkedin"></ion-icon>
                    </a></li>
                    <li class="social-icon__item"><a class="social-icon__link" href="#">
                        <ion-icon name="logo-instagram"></ion-icon>
                    </a></li>
                </ul>

                <ul class="menu">
                    <li class="menu__item"><a class="menu__link" href="#">Time de desenvolvimento</a></li>

                </ul>

                <p> Copyright &copy; 2023 O Valor de Uma Vida. Todos os direitos reservados.</p>

            </footer>
            <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
            <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
        </>
    )
}
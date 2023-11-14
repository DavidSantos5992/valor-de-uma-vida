'use client'
import { useState, useEffect, useMemo } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import Image from 'next/image';

export default function Header() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenuOnLinkClick = () => {
        if (isMenuOpen) {
            setIsMenuOpen(false);
        }
    };

    const menuStyles = useMemo(() => {
        return {
            visibility: isMenuOpen ? 'visible' : 'hidden',
            opacity: isMenuOpen ? 1 : 0,
        };
    }, [isMenuOpen]);

    useEffect(() => {
        const menu = document.querySelector('.navbar-menu');
        const backdrop = document.querySelector('.navbar-backdrop');

        if (menu && backdrop) {
            menu.style.visibility = menuStyles.visibility;
            backdrop.style.opacity = menuStyles.opacity;
        }
    }, [menuStyles]);

    return (
        <header className='fixed top-0 z-50 w-full'>

            <nav className="relative px-4 py-4 flex justify-between items-center bg-white shadow-md font-bold font-sans uppercase ">

                <ScrollLink
                    to='inicio'
                    className=" flex items-center  text-3 font-bold leading-none"
                    spy={true}
                    smooth={true}
                    duration={500}
                    onClick={closeMenuOnLinkClick} // Fecha o menu ao clicar em um link
                >

                    <Image
                        className='w-[55.8px] h-auto mr-[20px] text-shadow whitespace-nowrap'
                        priority={true}
                        width={500}
                        height={500}
                        src='/images/header_Logo.svg'
                        alt="logo valor de uma vida"
                    />

                    <strong className='font-sans text-[16px] font-bold  text-black text-shadow whitespace-nowrap'>Valor de uma vida</strong>

                </ScrollLink>

                <div className="lg:hidden">

                    <button className="navbar-burger flex items-center text-black-600 p-3" onClick={toggleMenu}>

                        <svg className="block h-4 w-4 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">

                            <title> Mobile menu hamburguer </title>
                            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>

                        </svg>

                    </button>

                </div>

                <ul className="hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2  lg:mx-auto lg:flex lg:items-center lg:w-auto lg:space-x-6">

                    <li className='hover:transform hover:scale-110'>
                        <ScrollLink
                            className="text-sm cursor-pointer"
                            to="inicio"
                            spy={true}
                            smooth={true}
                            duration={500}
                        >
                            início
                        </ScrollLink>
                    </li>

                    <li className='hover:transform hover:scale-110'>
                        <ScrollLink
                            className="text-sm cursor-pointer "
                            to='quem_somos'
                            spy={true}
                            smooth={true}
                            duration={500}
                        >
                            sobre nós
                        </ScrollLink>
                    </li>



                    <li className='hover:transform hover:scale-110'>
                        <ScrollLink
                            className="text-sm cursor-pointer"
                            to='parceiros'
                            spy={true}
                            smooth={true}
                            duration={500}
                        >
                            parceiros
                        </ScrollLink>
                    </li>



                    <li className='hover:transform hover:scale-110'>
                        <ScrollLink
                            className="text-sm cursor-pointer"
                            to='contato'
                            spy={true}
                            smooth={true}
                            duration={500}
                        >
                            contato
                        </ScrollLink>
                    </li>
                </ul>

                <ScrollLink
                    className="sm:hidden lg:block w-[158px] h-[34px] text-[15px] shadow-inner bg-yellow-400 hover:bg-yellow-500 shadow-gray-700  rounded-[20px] uppercase"
                    to='contato'
                    spy={true}
                    smooth={true}
                    duration={500}
                >
                    <p className='h-[100%] text-center flex justify-center items-center hover:cursor-pointer'>
                        seja parceiro
                    </p>
                </ScrollLink>


            </nav>

            {/* ----------celular---------- */}
            <ul className={isMenuOpen ? 'navbar-menu' : 'navbar-menu hidden'}>
                <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25 z-40" onClick={toggleMenu}></div>
                <nav className="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-white border-r overflow-y-auto z-[999] ">
                    <div className="flex items-center mb-8">

                        <ScrollLink
                            to='inicio'
                            className="mr-auto text-3xl flex flex-col justify-center items-center font-bold leading-none"
                        >
                            <Image
                                src='/images/header_Logo.svg'
                                width={500}
                                height={500}
                                alt="logo valor de uma vida"
                                className="w-[55.8px] mr-[20px] mb-3 text-shadow whitespace-nowrap"
                            />
                            <strong
                                className="font-sans text-[16px] font-bold text-black text-shadow whitespace-nowrap"
                            >
                                Valor de uma vida
                            </strong>
                        </ScrollLink>


                        <button className="navbar-close">
                            {/* Ícone de fechar o menu aqui */}
                        </button>
                    </div>

                    <div>

                        <ul>

                            <li className="mb-1">

                                <ScrollLink
                                    to='inicio'
                                    className="block p-4 text-sm font-semibold hover:bg-blue-50 hover:text-blue-600 rounded"
                                    spy={true}
                                    smooth={true}
                                    duration={500}
                                    onClick={closeMenuOnLinkClick}
                                >
                                    Início
                                </ScrollLink>


                            </li>

                            <li className="mb-1">

                                <ScrollLink
                                    to="quem_somos"
                                    className="block p-4 text-sm font-semibold hover:bg-blue-50 hover:text-blue-600 rounded"
                                    spy={true}
                                    smooth={true}
                                    duration={500}
                                    onClick={closeMenuOnLinkClick}
                                >
                                    Sobre nós
                                </ScrollLink>

                            </li>

                            <li className="mb-1">

                                <ScrollLink
                                    to='parceiros'
                                    className="block p-4 text-sm font-semibold hover:bg-blue-50 hover:text-blue-600 rounded"
                                    spy={true}
                                    smooth={true}
                                    duration={500}
                                    onClick={closeMenuOnLinkClick}
                                >
                                    Parceiros
                                </ScrollLink>


                            </li>

                            {/* <li className="mb-1">

                                <ScrollLink
                                    className="block p-4 text-sm font-semibold hover:bg-blue-50 hover:text-blue-600 rounded"
                                >
                                    Notícias
                                </ScrollLink>


                            </li> */}

                            <li className="mb-1">
                                <ScrollLink
                                    to='contato'
                                    className="block p-4 text-sm font-semibold hover:bg-blue-50 hover:text-blue-600 rounded"
                                    spy={true}
                                    smooth={true}
                                    duration={500}
                                    onClick={closeMenuOnLinkClick}
                                >
                                    Contato
                                </ScrollLink>

                            </li>
                        </ul>

                    </div>

                    <div className="mt-auto">
                        <div className="pt-6">
                            <ScrollLink
                                to='contato'
                                className="block px-4 py-3 mb-2 leading-loose text-xs text-center text-white font-semibold bg-blue-600 hover:bg-blue-700 rounded-xl"
                                spy={true}
                                smooth={true}
                                duration={500}
                                onClick={closeMenuOnLinkClick}
                            >
                                Seja parceiro
                            </ScrollLink>
                        </div>
                        <p className="my-4 text-xs text-center ">
                            <span>Copyright © 2023, Valor de uma vida</span>
                        </p>
                    </div>
                </nav>
            </ul>

        </header>
    );
}
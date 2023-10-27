'use client'
import { useState, useEffect } from 'react'; // Importe useState e useEffect do React
import Link from 'next/link';
import Button from '../Button';
import Image from 'next/image';
import logo from '../../../public/images/header_Logo.svg'

export default function Header() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const respawn = () => {
        console.log('teste')
    }

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        // Abra ou feche o menu e adicione a lógica aqui
        // Por exemplo, você pode adicionar classes para mostrar/ocultar o menu
        const menu = document.querySelector('.navbar-menu');
        const backdrop = document.querySelector('.navbar-backdrop');

        if (menu && backdrop) {
            if (isMenuOpen) {
                menu.classList.remove('hidden');
                backdrop.classList.remove('hidden');
            } else {
                menu.classList.add('hidden');
                backdrop.classList.add('hidden');
            }
        }
    }, [isMenuOpen]);

    return (
        <header className='fixed top-0 z-50 w-full'>

            <nav className="relative px-4 py-4 flex justify-between items-center bg-white shadow-md font-bold font-sans uppercase ">

                <Link className=" flex items-center backdrop:text-3xl font-bold leading-none" href="#">
                    <Image src={logo} alt="logo valor de uma vida" className='w-[55.8px] mr-[20px] text-shadow whitespace-nowrap' />
                    <strong className='font-sans text-[16px] font-bold  text-black text-shadow whitespace-nowrap'>Valor de uma vida</strong>
                </Link>

                <div className="lg:hidden">

                    <button className="navbar-burger flex items-center text-black-600 p-3" onClick={toggleMenu}>

                        <svg className="block h-4 w-4 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">

                            <title> Mobile menu hamburguer </title>
                            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>

                        </svg>

                    </button>

                </div>

                <ul className="hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2  lg:mx-auto lg:flex lg:items-center lg:w-auto lg:space-x-6">

                    <li>
                        <Link className="text-sm  " href="#">
                            início
                        </Link>
                    </li>

                    <li>
                        <Link className="text-sm  font-bold" href="#"> sobre nós</Link>
                    </li>



                    <li>
                        <Link className="text-sm  " href="#">parceiros</Link>
                    </li>

                    <li>
                        <Link className="text-sm  " href="#">notícias</Link>
                    </li>

                    <li>
                        <Link className="text-sm  " href="#">contato</Link>
                    </li>
                </ul>

                <Button
                    className="sm:hidden lg:block w-[158px] h-[34px] text-[15px] shadow-inner bg-yellow-400 shadow-gray-700  rounded-[20px] uppercase"
                    title={'seja parceiro'}
                    onPress={() => respawn()}
                />


            </nav>

            {/* ----------celular---------- */}

            <ul className={isMenuOpen ? 'navbar-menu' : 'navbar-menu hidden'}>
                <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25 z-40" onClick={toggleMenu}></div>
                <nav className="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-white border-r overflow-y-auto z-[999]">
                    <div className="flex items-center mb-8">

                        <Link className="mr-auto text-3xl flex flex-col justify-center items-center font-bold leading-none " href="#">

                            <Image src={logo} alt="logo valor de uma vida" className='w-[55.8px] mr-[20px] mb-3 text-shadow whitespace-nowrap' />
                            <strong className='font-sans text-[16px] font-bold  text-black text-shadow whitespace-nowrap'>Valor de uma vida</strong>

                        </Link>
                        <button className="navbar-close">
                            {/* Ícone de fechar o menu aqui */}
                        </button>
                    </div>

                    <div>

                        <ul>

                            <li className="mb-1">

                                <Link className="block p-4 text-sm font-semibold  hover:bg-blue-50 hover:text-blue-600 rounded" href="#">início
                                </Link>

                            </li>

                            <li className="mb-1">

                                <Link className="block p-4 text-sm font-semibold  hover:bg-blue-50 hover:text-blue-600 rounded" href="#">sobre nós
                                </Link>

                            </li>

                            <li className="mb-1">

                                <Link className="block p-4 text-sm font-semibold  hover:bg-blue-50 hover:text-blue-600 rounded" href="#">
                                    parceiros
                                </Link>

                            </li>

                            <li className="mb-1">

                                <Link className="block p-4 text-sm font-semibold  hover:bg-blue-50 hover:text-blue-600 rounded" href="#">notícias
                                </Link>

                            </li>

                            <li className="mb-1">

                                <Link className="block p-4 text-sm font-semibold  hover:bg-blue-50 hover:text-blue-600 rounded" href="#">contato
                                </Link>
                            </li>
                        </ul>

                    </div>

                    <div className="mt-auto">
                        <div className="pt-6">
                            <a className="block px-4 py-3 mb-2 leading-loose text-xs text-center text-white font-semibold bg-blue-600 hover:bg-blue-700 rounded-xl" href="#">Seja parceiro</a>
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
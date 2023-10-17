'use client'
import { useState, useEffect } from 'react'; // Importe useState e useEffect do React
import Link from 'next/link';
import Button from '../Button';
import Image from 'next/image';
import logo from '../../../public/images/header_Logo.svg'

export default function Header() {

    const [isOpen, setIsOpen] = useState(false);
    const genericHamburgerLine = `h-1 w-6 my-1 rounded-full bg-black transition ease transform duration-300`;

    const respawn = () => {
        console.log('teste')
    }

    return (
        <header className='w-full h-[75px] flex items-center justify-between shadow-md font-bold font-sans uppercase box-border pl-[24px] pr-[24px] fixed z-50 bg-white md:justify-normal'>

            <div className=' lg:w-[33%] md:w-[27%] flex items-center lg:m-0 md:mr-72'>
                <Image src={logo} alt="logo valor de uma vida" className='w-[55.8px] mr-[20px] text-shadow whitespace-nowrap' />
                <strong className='font-sans text-[16px] font-bold  text-black text-shadow whitespace-nowrap'>Valor de uma vida</strong>
            </div>

            <nav className='flex  w-[33.33%] md:hidden lg:block'>

                <Link className='mr-[27px]' href={'/'}>
                    início
                </Link>

                <Link className='mr-[27px]' href={'/'}>
                    sobre nós
                </Link>

                <Link className='mr-[27px]' href={'/'}>
                    parceiros
                </Link>

                <Link className='mr-[27px]' href={'/'}>
                    notícias
                </Link>

                <Link className='mr-[0]' href={'/'}>
                    contato
                </Link>

            </nav>


            <div className=' w-[33.33%] flex justify-end'>

                <Button
                    className=" w-[158px] h-[34px] text-[15px] shadow-inner bg-yellow-400 shadow-gray-700  rounded-[20px] uppercase"
                    title={'seja parceiro'}
                    onPress={() => respawn()}
                />

            </div>

            <button
                className="flex flex-col h-12 w-12  justify-center items-center group lg:m-0 md:ml-[37px] lg:hidden"
                onClick={() => setIsOpen(!isOpen)}
            >
                <div
                    className={`${genericHamburgerLine} ${isOpen
                        ? "rotate-45 translate-y-3  group-hover:opacity-100"
                        : " group-hover:opacity-100"
                        }`}
                />
                <div
                    className={`${genericHamburgerLine} ${isOpen ? "opacity-0" : " group-hover:opacity-100"
                        }`}
                />
                <div
                    className={`${genericHamburgerLine} ${isOpen
                        ? "-rotate-45 -translate-y-3  group-hover:opacity-100"
                        : " group-hover:opacity-100"
                        }`}
                />
            </button>

        </header>
    )
}
'use client'

import Link from 'next/link';
import Button from '../Button';
import Image from 'next/image';
import logo from '../../../public/images/header_Logo.svg'

export default function Header() {

    const respawn = () => {
        console.log('teste')
    }

    return (
        <header className='w-full h-[75px] flex items-center justify-between shadow-md font-bold font-sans uppercase box-border pl-[24px] pr-[24px] fixed z-20 bg-white'>

            <div className=' w-[33.33%]  flex items-center'>
                <Image src={logo} alt="logo valor de uma vida" className='w-[55.8px] mr-[20px] text-shadow' />
                <strong className='font-sans text-[16px] font-bold  text-black text-shadow'>Valor de uma vida</strong>
            </div>

            <nav className='flex  w-[33.33%] '>

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

            <div className=' w-[33.33%] flex justify-end '>
                <Button className=" w-[158px] h-[34px] text-[15px] bg-yellow-400 shadow-md rounded-[20px] uppercase" title={'seja parceiro'} onPress={() => respawn()} />
            </div>


        </header>
    )
}
'use client'
import Image from 'next/image';
import { Link as ScrollLink } from "react-scroll";

export default function BannerPartner() {
    return (
        <section className="mb-[200px] md:mb-[311px] relative">

            <Image
                className="w-full h-auto"
                width={500}
                height={500}
                src='/images/banner_escorregador.svg'
                alt="Banner Valor de uma vida"
            />

            <div className="overlay absolute inset-0 flex flex-col items-center justify-center bg-opacity-30 bg-black">

                <p className="text-white text-4xl sm:text-5xl lg:text-7xl font-bold font-sans uppercase leading-tight text-shadow mt-4 mb-12">Faça Parte Dessa História</p>

                <ScrollLink
                    className='cursor-pointer btn-yellow text-black shadow-inner hover:bg-yellow-500 rounded-full px-8 py-3 text-xl font-bold font-sans uppercase'
                    to='contato'
                    spy={true}
                    smooth={true}
                    duration={500}
                >
                    Seja nosso parceiro
                </ScrollLink>

            </div>

        </section>
    );
}

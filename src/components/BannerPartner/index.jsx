'use client'
import bannerEscorregador from '../../../public/images/banner_escorregador.svg';
import Image from 'next/image';
import { Link as ScrollLink } from "react-scroll";
import Button from '../Button';

export default function BannerPartner() {

    return (
        <div className="sm:mb-[200px] md:mb-[311px]">

            <div className="w-full relative ">

                <Image className="w-full h-auto" src={bannerEscorregador} alt="Banner Valor de uma vida" />

                <div className="w-full h-full flex flex-col items-center sm:justify-center box-border lg:pt-[369px]   bg-opacity-30 bg-black absolute top-0 left-0 z-10 ">

                    <p className="text-white sm:text-[20px] md:text-[44px] lg:text-[67px] font-bold font-sans uppercase leading-[100.50px] text-shadow sm:mt-[34px] md:mb-[124px] ">Faça Parte Dessa História</p>

                    {/* 
                    <Button
                        className='sm:w-[226.56px] sm:h-[27.33px] lg:w-[555.37px] lg:h-[67px] shadow-inner bg-yellow-400 shadow-black rounded-[39.59px] justify-center items-center text-black sm:text-[16px] md:text-[21px] font-bold font-sans uppercase '
                        title={'Seja nosso parceiro'}
                    /> */}

                    <ScrollLink
                        className='cursor-pointer sm:w-[226.56px] sm:h-[27.33px] lg:w-[555.37px] lg:h-[67px] shadow-inner bg-yellow-400 hover:bg-yellow-500  shadow-black rounded-[39.59px]  flex justify-center items-center text-black sm:text-[16px] md:text-[21px] font-bold font-sans uppercase '
                        to='contato'
                        spy={true}
                        smooth={true}
                        duration={500}
                    >
                        Seja nosso parceiro
                    </ScrollLink>




                </div>

            </div>

        </div>
    )
}
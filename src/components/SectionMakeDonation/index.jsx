'use client'
import React, { useState } from 'react'
import Image from 'next/image'

import { FaCopy, FaClipboardCheck } from 'react-icons/fa'

export default function SectionMakeDonation() {

    const [copied, setCopied] = useState(false);

    const handleCopyText = () => {
        const textoACopiar = '19.724.602.0001-10';

        if (navigator.clipboard) {
            navigator.clipboard.writeText(textoACopiar)
                .then(() => {
                    setCopied(true);
                    setTimeout(() => {
                        setCopied(false);
                    }, 3000);
                })
                .catch((error) => {
                    console.error('Erro ao copiar o texto: ', error);
                });
        } else {
            // Lógica alternativa para navegadores que não suportam a API `navigator.clipboard`
            copyTextUsingJS(textoACopiar);
        }
    };

    // Função para copiar texto usando JavaScript puro
    const copyTextUsingJS = (texto) => {
        const input = document.createElement('textarea');
        input.value = texto;
        document.body.appendChild(input);
        input.select();
        document.execCommand('copy');
        document.body.removeChild(input);
        setCopied(true);
        setTimeout(() => {
            setCopied(false);
        }, 3000);
    };


    const doences = [
        {
            name: 'AVC',
            icon: '/images/icon-avx.svg',
            alt: 'icone de avc Valor de uma vida ',
            color: 'text-cyan-600'
        },
        {
            name: 'Distrofia Muscular',
            icon: '/images/icon_distrofia.svg',
            alt: 'icone de Distrofia Muscular Valor de uma vida ',
            color: 'text-sky-800'
        },
        {
            name: 'Alzheimer',
            icon: '/images/C.svg',
            alt: 'icone de Alzaheimer Valor de uma vida ',
            color: 'text-pink-900'
        },
        {
            name: 'Paralisia Cerebral',
            icon: '/images/icon_paralisia.svg',
            alt: 'icone de Paralisia Cerebral Valor de uma vida ',
            color: 'text-red-800'
        },
        {
            name: 'Hidrocefalia',
            icon: '/images/icon_Hidrocefalia.svg',
            alt: 'icone de Hidrocefalia Valor de uma vida ',
            color: 'text-red-600'
        },
        {
            name: 'Câncer',
            icon: '/images/icon_cancer.svg',
            alt: 'icone de Câncer Valor de uma vida ',
            color: 'text-orange-500'
        },
        {
            name: 'Outras doenças',
            icon: '/images/icon_outras.svg',
            alt: 'icone de Outras doenças Valor de uma vida ',
            color: 'text-yellow-400'
        },
    ]

    return (
        <>

            <div className="w-full md:h-[905px] lg:h-[1194px] absolute sm:top-[3000px] md:top-[3470px] lg:top-[3580px] left-0  md:z-0 ">

                <section id='doencas' className='md:w-[400px] lg:w-[558px]  md:h-[677px] absolute md:top-[300px] md:left-[60px] lg:top-[530px] lg:left-[122px] '>

                    <p className='sm:text-center md:text-left md:w-[270px] lg:w-[558px] sm:mt-[900px] md:mt-20 lg:m-0 h-44 md:mb-[54px] text-black md:text-[21px] lg:text-[28px] font-normal font-Sans leading-[42px] text-justify'> Ao longo de nossa jornada, realizamos diversas campanhas especiais para ajudar pessoas doentes e moradores de rua. Essas campanhas são uma demonstração de nosso compromisso em fazer a diferença no mundo</p>

                    {
                        doences.map((doence, index) => (

                            <div key={index} className='doenca flex items-center sm:mb-[20px] lg:mb-[20px]  box-border sm:pl-2 md:pl-0'>

                                <Image
                                    className='sm:w-[26px] lg:w-[36px] h-auto'
                                    src={doence.icon}
                                    width={500}
                                    height={500}
                                    alt={doence.alt}
                                />

                                <p className={`md:text-[18px] lg:text-[21px] ml-[20px] text-shadow font-bold font-Sans uppercase leading-loose ${doence.color}`}>{doence.name}</p>

                            </div>

                        ))
                    }

                </section>

                <section id='sectionDonation' className='sm:w-[350px] md:w-[375px] sm:ml-[.7rem] sm_1:ml-[2rem] sm_2:ml-[2.5rem] sm_3:ml-[6rem] sm:h-[840px] md:h-[890px] lg:w-[500px] lg:h-[1194px] flex flex-col items-center shadow-black shadow-lg box-border sm:pt-[100px] md:pt-[250px] border-none rounded-[30px] mb-[50px] absolute  md:right-[36px] lg:right-[116px] sm:bg-facaColaboracao '>

                    <div id='contato' className='md:mt-[20px] lg:mt-[160px]'>
                        <Image
                            src="/images/cc_Logo.svg"
                            width={500}
                            height={500}
                            className='sm:w-[107px] lg:w-[142px] h-auto ml-auto mb-[14px] mr-auto'
                            alt='Logo Valor de Uma Vida'
                        />
                        <strong className='text-base text-[21px] font-bold uppercase text-shadow text-gray-800 not-italic'>VALOR DE UMA VIDA</strong>
                    </div>

                    <address className='sm:w-[312px] sm:h-[55px] md:w-[307px] lg:w-[395px] md:h-[64px] lg:h-[79px] flex items-center   justify-center solid border-t mt-[20px] border-b border-black box-border md:pb-[5px] md:pt-[5px] lg:pb-[17px]'>

                        <p className='text-center text-base text-[21px] font-bold uppercase text-shadow text-gray-800 not-italic'>Várzea Paulista - sp </p>

                    </address>

                    <h3 className='md:text-[20px] lg:text-[23px] text-center text-shadow font-bold font-sans uppercase sm:mt-[15px] lg:mt-[20px] mb-[40px]'>faça uma colaboração via pix</h3>

                    <Image className='sm:w-[185px] md:w-[150px] lg:w-[200px] h-auto sm:mb-[25px] md:mb-[30px]  '
                        src="/images/qr_Code.svg"
                        width={500}
                        height={500}
                        alt='Código QRcode'
                    />

                    <button onClick={handleCopyText}
                        className='sm:w-[243px] sm:h-[35px] w-[214px] md:h-[30px] lg:h-[42px] rounded-[20px] font-sans sm:text-[16px] lg:text-[21px] md:text-[15px] font-semibold bg-sectionButton flex items-center justify-center mb-[30px]'
                    >

                        19.724.602.0001-10

                        {copied ? (
                            <FaClipboardCheck className='ml-2' size={20} />
                        ) : (
                            <FaCopy className='ml-2' size={20} />
                        )}


                    </button>


                    <div className='sm:w-[312px] md:w-[307px] lg:w-[396px] sm:h-[52px] lg:h-[70px] border-t border-b solid border-black flex items-center justify-around '>

                        <a className='hover:transform hover:scale-110'
                            href="https://www.instagram.com/valordeumavida.ong/"
                            about='instagram valor de uma vida'
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Image
                                className='sm:w-[25px] lg:w-[30px] h-auto '
                                src="/images/icon_Instagram.svg"
                                width={500}
                                height={500}
                                alt='Instagram - Valor de Uma Vida'
                            />
                        </a>

                        <a className='hover:transform hover:scale-110'
                            href="https://www.facebook.com/ovalordeumavida"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Image
                                className='sm:w-[25px] lg:w-[30px] h-auto '
                                src="/images/icon_Facebook.svg"
                                width={500}
                                height={500}
                                alt='Facebook - Valor de Uma Vida'
                            />
                        </a>

                        <a className='hover:transform hover:scale-110'
                            href="https://api.whatsapp.com/send/?phone=5511933117977&text&type=phone_number&app_absent=0"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Image
                                className='sm:w-[25px] lg:w-[30px] h-auto '
                                src="/images/icon_WhatsApp.svg"
                                width={500}
                                height={500}
                                alt='Whatsapp - Valor de Uma Vida'
                            />
                        </a>
                    </div>


                </section>

            </div>
        </>



    )
}
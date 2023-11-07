'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import logo from '../../../public/images/cc_logo.svg'
import qrCode from '../../../public/images/qr_Code.svg'
import iconFacebook from '../../../public/images/icon_Facebook.svg'
import iconWhatsApp from '../../../public/images/icon_WhatsApp.svg'
import iconInstagram from '../../../public/images/icon_Instagram.svg'
import iconAvc from '../../../public/images/icon-avx.svg'
import iconDistrofia from '../../../public/images/icon_distrofia.svg'
import iconAlzaheimer from '../../../public/images/C.svg'
import iconParalisia from '../../../public/images/icon_paralisia.svg'
import iconHidrosefalia from '../../../public/images/icon_Hidrocefalia.svg'
import iconCancer from '../../../public/images/icon_cancer.svg'
import iconutras from '../../../public/images/icon_outras.svg'

import { FaCopy, FaClipboardCheck } from 'react-icons/fa'

export default function SectionMakeDonation() {

    const [copied, setCopied] = useState(false);

    const handleCopyText = () => {
        const textoACopiar = '19.724.602.0001-10';

        if (navigator.clipboard) {
            navigator.clipboard.writeText(textoACopiar)
                .then(() => {
                    setCopiado(true);
                    setTimeout(() => {
                        setCopiado(false);
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
        setCopiado(true);
        setTimeout(() => {
            setCopiado(false);
        }, 3000);
    };


    const doences = [
        {
            name: 'AVC',
            icon: iconAvc,
            alt: 'icone de avc Valor de uma vida ',
            color: 'text-cyan-600'
        },
        {
            name: 'Distrofia Muscular',
            icon: iconDistrofia,
            alt: 'icone de Distrofia Muscular Valor de uma vida ',
            color: 'text-sky-800'
        },
        {
            name: 'Alzheimer',
            icon: iconAlzaheimer,
            alt: 'icone de Alzaheimer Valor de uma vida ',
            color: 'text-pink-900'
        },
        {
            name: 'Paralisia Cerebral',
            icon: iconParalisia,
            alt: 'icone de Paralisia Cerebral Valor de uma vida ',
            color: 'text-red-800'
        },
        {
            name: 'Hidrocefalia',
            icon: iconHidrosefalia,
            alt: 'icone de Hidrocefalia Valor de uma vida ',
            color: 'text-red-600'
        },
        {
            name: 'Câncer',
            icon: iconCancer,
            alt: 'icone de Câncer Valor de uma vida ',
            color: 'text-orange-500'
        },
        {
            name: 'Outras doenças',
            icon: iconutras,
            alt: 'icone de Outras doenças Valor de uma vida ',
            color: 'text-yellow-400'
        },
    ]

    return (
        <>



            <div className="w-full md:h-[905px] lg:h-[1194px] absolute sm:top-[3000px] md:top-[3580px] left-0  md:z-0 ">

                <section className='md:w-[400px] lg:w-[558px]  md:h-[677px] absolute md:top-[300px] md:left-[60px] lg:top-[530px] lg:left-[122px] '>

                    <p className=' sm:text-center md:text-left md:w-[400px] lg:w-[558px] sm:mt-[900px] md:m-0 h-44 md:mb-[54px] text-black md:text-[21px] lg:text-[28px] font-normal font-Sans leading-[42px] '> Temos como objetivo principal prestar auxílio a pessoas com <strong className='font-normal'>vulnerabilidade</strong> social e portadoras de diversas <strong className='font-normal'>doenças</strong>  <strong className='font-normal'>crônicas</strong>, dentre elas:</p>

                    {
                        doences.map((doence, index) => (

                            <div key={index} className='flex items-center mb-[20px] box-border sm:pl-2 md:pl-0'>

                                <Image
                                    className='md:w-[26px] lg:w-[36px] h-auto'
                                    src={doence.icon}
                                    alt={doence.alt}
                                />

                                <p className={`md:text-[18px] lg:text-[21px] ml-[20px] text-shadow font-bold font-Sans uppercase leading-loose ${doence.color}`}>{doence.name}</p>

                            </div>

                        ))
                    }

                </section>

                <section className='sm:w-[370px] md:w-[375px] sm:ml-[.7%] sm:h-[840px] md:h-[890px] lg:w-[500px] lg:h-[1194px] flex flex-col items-center shadow-black shadow-lg box-border sm:pt-[100px] md:pt-[250px] border-none rounded-[30px] mb-[50px] absolute  md:right-[36px] lg:right-[116px] bg-facaColaboracao '>

                    <div id='contato' className='md:mt-[20px] lg:mt-[160px]'>
                        <Image src={logo}
                            className='md:w-[107px] lg:w-[142px] h-auto ml-auto mb-[14px] mr-auto'
                            alt='Logo Valor de Uma Vida'
                        />
                        <strong className='text-base text-[21px] font-bold uppercase text-shadow text-gray-800 not-italic'>VALOR DE UMA VIDA</strong>
                    </div>

                    <address className='sm:w-[312px] sm:h-[55px] md:w-[307px] lg:w-[395px] md:h-[64px] lg:h-[79px] flex items-center   justify-center solid border-t mt-[20px] border-b border-black box-border md:pb-[5px] md:pt-[5px] lg:pb-[17px]'>

                        <p className='text-center text-base text-[21px] font-bold uppercase text-shadow text-gray-800 not-italic'>Várzea Paulista - sp </p>

                    </address>

                    <h3 className='md:text-[20px] lg:text-[28px] text-shadow font-bold font-sans uppercase sm:mt-[15px] lg:mt-[20px] mb-[40px]'>faça uma colaboração via pix</h3>

                    <Image className='sm:w-[185px] md:w-[150px] lg:w-[200px] h-auto sm:mb-[25px] md:mb-[30px]  '
                        src={qrCode}
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
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Image className='md:w-[22px] lg:w-[30px] h-auto ' src={iconInstagram} alt='Instagram - Valor de Uma Vida' />
                        </a>

                        <a className='hover:transform hover:scale-110'
                            href="https://www.facebook.com/ovalordeumavida"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Image className='md:w-[22px] lg:w-[30px] h-auto ' src={iconFacebook} alt='Facebook - Valor de Uma Vida' />
                        </a>

                        <a className='hover:transform hover:scale-110'
                            href="https://api.whatsapp.com/send/?phone=5511933117977&text&type=phone_number&app_absent=0"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Image className='md:w-[22px] lg:w-[30px] h-auto ' src={iconWhatsApp} alt='Whatsapp - Valor de Uma Vida' />
                        </a>
                    </div>


                </section>

            </div>
        </>



    )
}
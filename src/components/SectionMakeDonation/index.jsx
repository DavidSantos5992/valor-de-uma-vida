'use client'
import Button from '../Button'
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
export default function SectionMakeDonation() {

    const handleButton = () => {
        console.log('Faça a diferença ')
    }

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
        <div className="w-full md:h-[905px] lg:h-[1194px] absolute top-[3580px] left-0  z-0 ">

            <section className='md:w-[400px] lg:w-[558px] h-[677px] absolute md:top-[300px] md:left-[60px] lg:top-[530px] lg:left-[122px] '>
                <p className='md:w-[400px] lg:w-[558px] h-44 mb-[54px] text-black md:text-[21px] lg:text-[28px] font-normal font-Sans leading-[42px]'> Temos como objetivo principal prestar auxílio a pessoas com <strong className='font-normal'>vulnerabilidade</strong> social e portadoras de diversas <strong className='font-normal'>doenças</strong>  <strong className='font-normal'>crônicas</strong>, dentre elas:</p>

                {
                    doences.map((doence, index) => (

                        <div key={index} className='flex items-center mb-[20px]'>

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

            <section className='md:w-[375px]  md:h-[890px] lg:w-[500px] lg:h-[1194px] flex flex-col items-center shadow-black shadow-lg box-border pt-[250px] border-none rounded-[30px] mb-[50px] absolute md:right-[36px] lg:right-[116px] bg-facaColaboracao '>

                <div className='md:mt-[20px] lg:mt-[160px]'>
                    <Image src={logo}
                        className='md:w-[107px] lg:w-[142px] h-auto ml-auto mb-[14px] mr-auto'
                        alt='Logo Valor de Uma Vida'
                    />
                    <strong className='text-base text-[21px] font-bold uppercase text-shadow text-gray-800 not-italic'>VALOR DE UMA VIDA</strong>
                </div>

                <address className='md:w-[307px] lg:w-[395px] md:h-[64px] lg:h-[79px] flex items-center   justify-center solid border-t mt-[20px] border-b border-black box-border md:pb-[5px] md:pt-[5px] lg:pb-[17px]'>
                    <p className='text-center text-base text-[21px] font-bold uppercase text-shadow text-gray-800 not-italic'>Várzea Paulista - sp </p>
                </address>

                <h3 className='md:text-[20px] lg:text-[28px] text-shadow font-bold font-sans uppercase md:mt-[15px] lg:mt-[20px] mb-[40px]'>faça uma colaboração</h3>

                <Image className='md:w-[150px] lg:w-[200px] h-auto md:mb-[40px] lg:mb-[54px] '
                    src={qrCode}
                    alt='Código QRcode' />

                <div className='md:w-[307px] lg:w-[396px] md:h-[52px] lg:h-[70px] border-t border-b solid border-black flex items-center justify-around '>
                    <Image className='md:w-[22px] lg:w-[30px] h-auto' src={iconInstagram} alt='Instagram - Valor de Uma Vida' />
                    <Image className='md:w-[22px] lg:w-[30px] h-auto' src={iconFacebook} alt='Facebook - Valor de Uma Vida' />
                    <Image className='md:w-[22px] lg:w-[30px] h-auto' src={iconWhatsApp} alt='Whatsapp - Valor de Uma Vida' />
                </div>

                <Button className='w-[214px] md:h-[30px] lg:h-[42px] rounded-[20px] font-sans lg:text-[21px] md:text-[15px] font-semibold bg-sectionButton flex items-center justify-center mt-auto mb-auto' title={'Faça a Diferença'} onPress={() => handleButton()} />
            </section>

        </div>


    )
}
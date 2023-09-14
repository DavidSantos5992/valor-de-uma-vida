'use client'
import Button from '../Button'
import Image from 'next/image'
import logo from '../../../public/images/cc_logo.svg'
import qrCode from '../../../public/images/qr_Code.svg'
import iconFacebook from '../../../public/images/icon_Facebook.svg'
import iconWhatsApp from '../../../public/images/icon_WhatsApp.svg'
import iconInstagram from '../../../public/images/icon_Instagram.svg'
export default function SectionMakeDonation() {

    const handleButton = () => {
        console.log('Faça a diferença ')
    }

    return (

        <section className='w-[500px] h-[1054px] flex flex-col items-center shadow-black shadow-lg box-border pt-[250px] border-none rounded-[30px] mb-[50px] absolute top-[3620px] right-[116px] bg-facaColaboracao z-0'>

            <div>
                <Image src={logo}
                    className='w-[142px] h-[142px] ml-auto mb-[14px] mr-auto'
                    alt='Logo Valor de Uma Vida'
                />
                <strong className='text-base text-[21px] font-bold uppercase text-shadow text-gray-800 not-italic'>VALOR DE UMA VIDA</strong>
            </div>

            <address className='w-[395px] h-[79px] flex items-end  justify-center solid border-t mt-[20px] border-b border-black box-border pb-[17px]'>
                <p className='text-center text-base text-[21px] font-bold uppercase text-shadow text-gray-800 not-italic'>Várzea Paulista - sp </p>
            </address>

            <h3 className='text-[28px] text-shadow font-bold font-sans uppercase mt-[20px] mb-[54px]'>faça uma colaboração</h3>

            <Image className='w-[200px] h-auto mb-[54px] '
                src={qrCode}
                alt='Código QRcode' />

            <div className='w-[396px] h-[70px] border-t border-b solid border-black flex items-center justify-around '>
                <Image className='w-[30px] h-auto' src={iconInstagram} alt='Instagram - Valor de Uma Vida' />
                <Image className='w-[30px] h-auto' src={iconFacebook} alt='Facebook - Valor de Uma Vida' />
                <Image className='w-[30px] h-auto' src={iconWhatsApp} alt='Whatsapp - Valor de Uma Vida' />
            </div>

            <Button className='w-[214px] h-[42px] rounded-[20px] font-sans text-[21px] font-semibold bg-sectionButton flex items-center justify-center mt-auto mb-auto' title={'Faça a Diferença'} onPress={()=> handleButton()}/>
        </section>
        
    )
}
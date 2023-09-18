'use client'
import icon_natal_valor_de_uma_vida from '../../../public/images/icon-natal-valor-de-uma-vida.svg'
import Natal_valor_de_uma_vida from '../../../public/images/cards carrosel/campaigns_Item_01.png'
import Image from 'next/image'

export default function Campaigns() {

    return (

        <div className="w-full  h-[411px] bg-rose-500 mt-[120px] flex items-center justify-start relative">

            <div className="w-[98px] h-[67px] flex items-end justify-center box-border pb-3 rounded-tl-lg rounded-tr-lg bg-rose-500 absolute top-[-67px] left-0 ">
                <Image className='w-[15px] mr-[10px] ' src={icon_natal_valor_de_uma_vida} />
                <Image className='w-[24px]' src={icon_natal_valor_de_uma_vida} />
            </div>

            <div className="w-[286px] h-[67px] flex items-center justify-center rounded-tl-lg rounded-tr-lg bg-rose-500 absolute top-[-67px] left-[102px] ">
                <strong className='text-white text-[28px] font-bold font-sans shadow-black text-shadow uppercase leading-[42px]'>
                    natal solidário
                </strong>
            </div>

            <div className='w-[282px] h-[352px] flex items-center bg-blue-200'>

                <div className='w-[292px] h-[292px] left-0 top-0 flex items-center justify-center bg-green-400 rounded-[35px] border-2 border-zinc-300'>
                   
                    <Image className='w-[282px] h-[272px]' src={Natal_valor_de_uma_vida} />

                </div>

                

            </div>
        </div>

    )
}
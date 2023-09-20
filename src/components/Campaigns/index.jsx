'use client'
import icon_natal_valor_de_uma_vida from '../../../public/images/icon-natal-valor-de-uma-vida.svg'
import Natal_valor_de_uma_vida from '../../../public/images/cards carrosel/campaigns_Item_01.png'
import arrow_icon_rose from '../../../public/images/btn_Icon-rose.svg'
import Image from 'next/image'

const arrayImages = [Natal_valor_de_uma_vida, Natal_valor_de_uma_vida, Natal_valor_de_uma_vida]

export default function Campaigns() {

    return (

        <div className="w-full  h-[411px] bg-rose-500 mt-[120px] flex items-center justify-start relative">

            <div className="w-[98px] h-[67px] flex items-end justify-center box-border pb-3 rounded-tl-lg rounded-tr-lg bg-rose-500 absolute top-[-67px] left-0 ">
                <Image className='w-[15px] mr-[10px] ' src={icon_natal_valor_de_uma_vida} alt='campanha valor de uma vida' />
                <Image className='w-[24px]' src={icon_natal_valor_de_uma_vida} alt='campanha valor de uma vida' />
            </div>

            <div className="w-[286px] h-[67px] flex items-center justify-center rounded-tl-lg rounded-tr-lg bg-rose-500 absolute top-[-67px] left-[102px] ">
                <strong className='text-white text-[28px] font-bold font-sans shadow-black text-shadow uppercase leading-[42px]'>
                    natal solidário
                </strong>
            </div>

            <div className='w-[366px] h-[352px]  border-r-2 border-white-500 flex flex-col items-start ml-[56px] '>

                <div className='w-[292px] h-[292px] overflow-hidden mb-[23px] left-0 top-0 flex items-center justify-center rounded-[35px] border-2 border-zinc-300'>

                    <Image className='w-[282px] h-[272px] rounded-[35px]' src={Natal_valor_de_uma_vida} alt='icon campanha valor de uma vida' />

                </div>

                <button className='w-[292px] h-[47px] bg-white rounded-[20px] flex items-center justify-between box-border pl-[30px] pr-[30px]'>
                    <p className=' text-rose-500 h-[33px]  capitalize flex items-center text-[28px] font-bold font-sans leading-[42px]'>saber mais</p>
                    <Image className='w-[39px]' src={arrow_icon_rose} alt='arrow_Valor_de_Uma_Vida' />
                </button>

            </div>

            <div className='w-[82%] h-[282px] ml-[62px] flex items-center justify-around'>

                {
                    arrayImages.map((element) => (

                        <div className='w-[282px] h-[282px] rounded-[35px]  overflow-hidden'>

                            <Image src={element} />

                        </div>

                    ))
                }


            </div>


        </div>

    )
}
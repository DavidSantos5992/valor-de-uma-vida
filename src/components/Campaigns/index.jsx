'use client'

import Image from 'next/image'

export default function Campaigns({ campaign, mainColor, fontColor }) {

    return (

        <div className={`w-full  h-[411px] bg-${mainColor} mt-[120px] flex items-center justify-start relative`}>

            <div className={`w-[98px] h-[67px] flex items-end justify-center box-border pb-3 rounded-tl-lg rounded-tr-lg bg-${mainColor} absolute top-[-67px] left-0 `}>
                <Image
                    alt={campaign.alt}
                    className='w-[15px] h-auto mr-[10px] ' src={campaign.icon} alt='campanha valor de uma vida'
                />
                
                <Image
                    alt={campaign.alt}
                    className='w-[24px] h-auto' src={campaign.icon}
                />

            </div>

            <div className={` box-border pl-[16px] pr-[16px] h-[67px] flex items-center justify-center rounded-tl-lg rounded-tr-lg bg-${mainColor} absolute top-[-67px] left-[102px] `}>

                <strong className='text-white text-[28px] font-bold font-sans shadow-black text-shadow uppercase leading-[42px]'>
                    {campaign.title}
                </strong>

            </div>

            <div className='w-[366px] h-[352px]  border-r-2 border-white-500 flex flex-col items-start ml-[56px] '>

                <div className='w-[292px] h-[292px]  mr-[40px] overflow-hidden mb-[23px] left-0 top-0 flex items-center justify-center rounded-[35px] border-2 border-zinc-300'>

                    <Image className='w-[282px] h-auto rounded-[35px]' src={campaign.photos[0]} alt='icon campanha valor de uma vida' />

                </div>

                <button className='w-[292px] h-[47px] bg-white rounded-[20px] flex items-center justify-between box-border pl-[30px] pr-[30px]'>
                    <p className={`${fontColor}  h-[33px]  capitalize flex items-center text-[28px] font-bold font-sans leading-[42px]`}>saber mais</p>
                    <Image className='w-[39px] ' src={campaign.arrowIcon} alt='arrow_Valor_de_Uma_Vida' />
                </button>

            </div>

            <div className='w-[82%] h-[282px] ml-[62px] flex items-center '>

                {
                    campaign.photos.map((element, index) => (

                        <div key={index} className='w-[290px] h-[290px] flex items-center justify-center rounded-[35px] mr-[30px] overflow-hidden'>

                            <Image alt={campaign.alt} className=' w-[282px] h-[282px] rounded-[35px]' src={element} />

                        </div>

                    ))
                }


            </div>


        </div>

    )
}
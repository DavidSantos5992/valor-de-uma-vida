'use client'

import Image from 'next/image'

export default function Campaigns({ campaign, mainColor, fontColor, id, url }) {

    return (

        <div id={id} className={`w-full md:h-[322.67px] lg:h-[411px] ${mainColor} mt-[120px] flex items-center justify-start relative z-10`}>

            <div className={` w-[98px] h-[67px] flex items-end justify-center box-border pb-3 rounded-tl-lg rounded-tr-lg ${mainColor} absolute top-[-67px] left-0 `}>
                <Image
                    alt={campaign.alt}
                    className='w-[15px] h-auto mr-[10px] ' src={campaign.icon}
                />

                <Image
                    alt={campaign.alt}
                    className='w-[24px] h-auto' src={campaign.icon}
                />

            </div>

            <div className={` box-border pl-[16px] pr-[16px] h-[67px] flex items-center justify-center rounded-tl-lg rounded-tr-lg ${mainColor} absolute top-[-67px] left-[102px] `}>

                <strong className='text-white sm:text-[20px] text-[28px] font-bold font-sans shadow-black text-shadow uppercase leading-[42px]'>
                    {campaign.title}
                </strong>

            </div>

            <div className='sm:w-[110px] md:w-[366px] h-[90%]  border-r-2 border-white-500 flex flex-col items-start sm:ml-[20px] sm:mr-[10px] md:ml-[56px]'>

                <div className='sm:w-[100px] sm:h-[100px] md:w-[188px] lg:w-[292px] md:h-[188px] lg:h-[292px] md:mt-[40px] mr-[40px] overflow-hidden mb-[23px] left-0 top-0 flex items-center justify-center sm:rounded-[20px] md:rounded-[35px] border-2 border-zinc-300 '>

                    <Image className='w-[282px] h-auto sm:rounded-[20px] md:rounded-[35px]' src={campaign.mainPhoto} alt='icon campanha valor de uma vida' />

                </div>

                <a
                    href={url}
                    target='blank'
                    className='sm:w-[100px] md:w-[188px] lg:w-[292px] sm:h-[27px] md:h-[35px] lg:h-[47px] bg-white rounded-[20px] flex items-center justify-between box-border md:pl-[30px] sm:pr-[12px] sm:pl-[12px] md:pr-[30px] '
                >
                    <p className={`${fontColor} sm:h-[100%]  lg:h-[33px]  capitalize flex justify-center items-center sm:text-[10px]  md:text-[19px] lg:text-[28px] font-bold font-sans md:leading-[42px]`}>ver mais</p>

                    <Image className='sm:w-[15px]  md:w-[39px] ' src={campaign.arrowIcon} alt='arrow_Valor_de_Uma_Vida' />

                </a>

            </div>

            <div className='sm:w-[244px] md:w-[550px] lg:w-[82%] h-[282px] lg:ml-[42px] md:ml-[20px] flex sm:flex-wrap md:flex-nowrap items-center '>

                {
                    campaign.photos.map((element, index) => (

                        <div key={index} className=' sm:w-[68px] sm:h-[68px] md:w-[188px] lg:w-[292px] md:h-[188px] lg:h-[292px]  flex items-center justify-center rounded-[10px] md:rounded-[35px] sm:mr-[10px] md:mr-[20px] lg:mr-[30px] overflow-hidden'>

                            <Image alt={campaign.alt} className=' w-[282px] h-auto sm:rounded-[10px] md:rounded-[35px]' src={element} />

                        </div>

                    ))
                }


            </div>


        </div>

    )
}
'use client'
import { React, useRef, useState } from 'react';
import './styles.css'
import Image from 'next/image';
import img from '../../../public/images/cards carrosel/campaigns_Item_01.png'
import img2 from '../../../public/images/cards carrosel/campaigns_Item_02.png'
import img3 from '../../../public/images/cards carrosel/campaigns_Item_03.png'

import arrow_Left from '../../../public/images/arrow_Left.svg'
import arrow_Right from '../../../public/images/arrow_Right.svg'

export default function Carrossel({ title, className, type }) {

    const [itemsCarrosel, setItemsCarrosel] = useState([

        {
            name: 'natal',
            photo: img,
            text: '',
            alt: 'Camapanha de natal valor de uma vida'
        },

        {
            name: 'inverno',
            photo: img2,
            text: '',
            alt: 'Camapanha de inverno valor de uma vida'
        },

        {
            name: 'dia das crianças',
            photo: img3,
            text: '',
            alt: 'Camapanha de dia das crinaças valor de uma vida'
        },

        {
            name: 'dia das crianças',
            photo: img3,
            text: '',
            alt: 'Camapanha de dia das crinaças valor de uma vida'
        },

    ])

    const [news, setNews] = useState([

        {
            title: 'lorem ipsum',
            photo: img3,
            alt: '',
            text: 'Lorem ipsum dolor sit amet consectetur. Etiam diam massa nunc vitae commodo nisi. Dolor velit sed eu orci ornare aliquet duis duis arcu. Cras tempus at feugiat gravida eget pellentesque mi in posuere. scelerisque massa...',
            url: ''
        },

        {
            title: 'lorem ipsum',
            photo: img3,
            alt: '',
            text: 'Lorem ipsum dolor sit amet consectetur. Etiam diam massa nunc vitae commodo nisi. Dolor velit sed eu orci ornare aliquet duis duis arcu. Cras tempus at feugiat gravida eget pellentesque mi in posuere. scelerisque massa...',
            url: ''
        },

        {
            title: 'lorem ipsum',
            photo: img3,
            alt: '',
            text: 'Lorem ipsum dolor sit amet consectetur. Etiam diam massa nunc vitae commodo nisi. Dolor velit sed eu orci ornare aliquet duis duis arcu. Cras tempus at feugiat gravida eget pellentesque mi in posuere. scelerisque massa...',
            url: ''
        },

        {
            title: 'lorem ipsum',
            photo: img3,
            alt: '',
            text: 'Lorem ipsum dolor sit amet consectetur. Etiam diam massa nunc vitae commodo nisi. Dolor velit sed eu orci ornare aliquet duis duis arcu. Cras tempus at feugiat gravida eget pellentesque mi in posuere. scelerisque massa...',
            url: ''
        },



    ])

    const carousel = useRef(null)

    const handleLeftClick = (e) => {
        carousel.current.scrollLeft -= carousel.current.offsetWidth

    }

    const handleRightClick = (e) => {
        carousel.current.scrollLeft += carousel.current.offsetWidth
    }

    const handleClickCarrosel = (k) => {
        console.log('clicou', k)
    }

    return (

        <div className={className}>

            <div className="carroselContainer">

                <h1 className='font-sans'>{title}</h1>

                <div className="carrosel" ref={carousel}>

                    {
                        type === 'card' && (
                            <>
                                {
                                    itemsCarrosel.map((item, key) =>

                                        <div onClick={() => handleClickCarrosel(key)} key={key} className="item">

                                            <div className="image">
                                                <Image src={item.photo} alt={item.alt} />
                                            </div>

                                        </div>

                                    )
                                }
                            </>
                        )
                    }

                    {
                        type === 'news' && (
                            <>
                                {
                                    news.map((item, key) =>

                                        <div onClick={() => handleClickCarrosel(key)} key={key} className="w-[358px] h-[528px] flex items-center justify-center ml-[10px] mr-[80px] rounded-[20px]">

                                            <div className='w-[338px] h-[520px] bg-white box-border pr-[29px] pl-[29px] pt-[22.8px] shadow-black shadow-md rounded-[20px] overflow-hidden'>
                                                <Image className='w-[280px] h-60  rounded-[10px]' src={item.photo} alt={item.alt} />
                                                
                                                <h3 className='text-black text-[21px] font-sans font-bold uppercase leading-loose mb-[5px]' >{item.title}</h3>
                                                <p className='text-black text-base font-normal h-[165px]  overflow-hidden font-sans leading-normal'>{item.text}   </p>

                                            </div>

                                        </div>

                                    )
                                }
                            </>
                        )


                    }


                </div>

                <button className='leftClick' onClick={handleLeftClick}>
                    {<Image src={arrow_Left} alt='Seta para esquerda' />}
                </button>

                <button className='rightClick' onClick={handleRightClick} >
                    {<Image src={arrow_Right} alt='Seta para direita' />}
                </button>


            </div>

        </div>

    )
}
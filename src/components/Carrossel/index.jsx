'use client'
import { React, useRef, useState } from 'react';
import './styles.css'
import Image from 'next/image';
import img from '../../../public/images/cards carrosel/campaigns_Item_01.png'
import img2 from '../../../public/images/cards carrosel/campaigns_Item_02.png'
import img3 from '../../../public/images/cards carrosel/campaigns_Item_03.png'

import arrow_Left from '../../../public/images/arrow_Left.svg'
import arrow_Right from '../../../public/images/arrow_Right.svg'

export default function Carrossel() {

    const [itemsCarrosel, setItemsCarrosel] = useState([

        {
            name: 'natal',
            type: 'campanha',
            photo: img,
            text: '',
            alt: 'Camapanha de natal valor de uma vida'
        },
     
        {
            name: 'inverno',
            type: 'campanha',
            photo: img2,
            text: '',
            alt: 'Camapanha de inverno valor de uma vida'
        },

        {
            name: 'dia das crianças',
            type: 'campanha',
            photo: img3,
            text: '',
            alt: 'Camapanha de dia das crinaças valor de uma vida'
        },
        {
            name: 'dia das crianças',
            type: 'campanha',
            photo: img3,
            text: '',
            alt: 'Camapanha de dia das crinaças valor de uma vida'
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
        console.log('clicou',k)
    }

    return (

        <div className="carroselContainer">

            <h1 className='font-sans'>campanhas</h1>

            <div className="carrosel" ref={carousel}>

                {itemsCarrosel.map((item,key) =>
                    
                    <div onClick={()=>handleClickCarrosel(key)} key={key} className="item">

                        <div className="image">
                            <Image src={item.photo} alt='foto' />
                        </div>
                        
                    </div>

                )}

            </div>

            <button className='leftClick' onClick={handleLeftClick}>
                {<Image src={arrow_Left} alt='Seta para esquerda' />}
            </button>

            <button className='rightClick' onClick={handleRightClick} >
                {<Image src={arrow_Right} alt='Seta para direita' />}
            </button>


        </div>

    )
}
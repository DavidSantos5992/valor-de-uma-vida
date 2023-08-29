'use client'
import { React, useRef } from 'react';
import './styles.css'
import Image from 'next/image';
import img from '../../../public/images/cards carrosel/campaigns_Item_01.png'
import img2 from '../../../public/images/cards carrosel/campaigns_Item_02.png'
import img3 from '../../../public/images/cards carrosel/campaigns_Item_03.png'

import arrow_Left from '../../../public/images/arrow_Left.svg'
import arrow_Right from '../../../public/images/arrow_Right.svg'

export default function Carrossel() {
    const carousel = useRef(null)
    const handleLeftClick = (e) => {
        console.log('l', carousel.current.offsetWidth)
        carousel.current.scrollLeft -= carousel.current.offsetWidth

    }

    const handleRightClick = (e) => {
        console.log('r', carousel.current.offsetWidth)
        carousel.current.scrollLeft += carousel.current.offsetWidth

    }

    return (

        <div className="carroselContainer">

            <div className="carrosel" ref={carousel}>

                <div className="item">
                    <div className="image">
                        <Image src={img} />
                    </div>

                </div>

                <div className="item">
                    <div className="image">
                        <Image src={img2} />
                    </div>

                </div>

                <div className="item">
                    <div className="image">
                        <Image src={img3} />
                    </div>

                </div>

                <div className="item">
                    <div className="image">
                        <Image src={img} />
                    </div>

                </div>

                <div className="item">
                    <div className="image">
                        <Image src={img2} />
                    </div>

                </div>

             

            </div>


            <button className='leftClick' onClick={handleLeftClick}>
                <Image src={arrow_Left} />
            </button>

            <button className='rightClick' onClick={handleRightClick} >
                <Image src={arrow_Right} />
            </button>


        </div>

    )
}
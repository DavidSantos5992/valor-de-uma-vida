'use client'
import { React, useRef } from 'react';
import './styles.css'
import Image from 'next/image';
import img from '../../../public/images/logo.png'
import arrow_Left from '../../../public/images/arrow_Left.svg'
import arrow_Right from '../../../public/images/arrow_Right.svg'

export default function Carrossel() {
    const carousel = useRef(null)
    const handleLeftClick = (e) => {
        console.log('l',carousel.current.offsetWidth)
        carousel.current.scrollLeft -= carousel.current.offsetWidth

    }

    const handleRightClick = (e) => {
        console.log('r',carousel.current.offsetWidth)
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
                        <Image src={img} />
                    </div>
                    
                </div>

                <div className="item">
                    <div className="image">
                        <Image src={img} />
                    </div>
                    
                </div>

                <div className="item">
                    <div className="image">
                        <Image src={img} />
                    </div>
                    
                </div>

                <div className="item">
                    <div className="image">
                        <Image src={img} />
                    </div>
                    
                </div>

                <div className="item">
                    <div className="image">
                        <Image src={img} />
                    </div>
                    
                </div>

                <div className="item">
                    <div className="image">
                        <Image src={img} />
                    </div>
                    
                </div>

                <div className="item">
                    <div className="image">
                        <Image src={img} />
                    </div>
                    
                </div>

                <div className="item">
                    <div className="image">
                        <Image src={img} />
                    </div>
                    
                </div>

                <div className="item">
                    <div className="image">
                        <Image src={img} />
                    </div>
                    
                </div>

                <div className="item">
                    <div className="image">
                        <Image src={img} />
                    </div>
                    
                </div>

                <div className="item">
                    <div className="image">
                        <Image src={img} />
                    </div>
                    
                </div>

                <div className="item">
                    <div className="image">
                        <Image src={img} />
                    </div>
                    
                </div>

                <div className="item">
                    <div className="image">
                        <Image src={img} />
                    </div>
                    
                </div>

                <div className="item">
                    <div className="image">
                        <Image src={img} />
                    </div>
                    
                </div>

                <div className="item">
                    <div className="image">
                        <Image src={img} />
                    </div>
                    
                </div>

            </div>

            <div className="buttons">

                <button onClick={handleLeftClick}>
                    <Image src={arrow_Left} />
                </button>

                <button onClick={handleRightClick} >
                    <Image src={arrow_Right} />
                </button>

            </div>

        </div>

    )
}
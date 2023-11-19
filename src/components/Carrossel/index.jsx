'use client'
import { React, useRef, useState, useEffect } from 'react';
import './styles.css'
import { Link as ScrollLink } from 'react-scroll';
import Image from 'next/image';

export default function Carrossel({ title, className, type }) {

    const [itemsCarrosel, setItemsCarrosel] = useState([

        {
            name: 'natal',
            photo: '/images/cards carrosel/campaigns_Item_01.png',
            text: '',
            alt: 'Camapanha de natal valor de uma vida',
            id: 'natal_solidario'
        },

        {
            name: 'inverno',
            photo: '/images/cards carrosel/campaigns_Item_02.png',
            text: '',
            alt: 'Camapanha de inverno valor de uma vida',
            id: 'inverno_solidario'
        },

        {
            name: 'dia das crianças',
            photo: '/images/cards carrosel/campaigns_Item_03.png',
            text: '',
            alt: 'Camapanha de dia das crinaças valor de uma vida',
            id: 'diaDasCriancas_solidario'
        },

    ])

    const [news, setNews] = useState([

        {
            title: 'lorem ipsum',
            photo: '/images/cards carrosel/campaigns_Item_03.png',
            alt: '',
            text: 'Lorem ipsum dolor sit amet consectetur. Etiam diam massa nunc vitae commodo nisi. Dolor velit sed eu orci ornare aliquet duis duis arcu. Cras tempus at feugiat gravida eget pellentesque mi in posuere. scelerisque massa...',
            url: ''
        },
        {
            title: 'lorem ipsum',
            photo: '/images/cards carrosel/campaigns_Item_03.png',
            alt: '',
            text: 'Lorem ipsum dolor sit amet consectetur. Etiam diam massa nunc vitae commodo nisi. Dolor velit sed eu orci ornare aliquet duis duis arcu. Cras tempus at feugiat gravida eget pellentesque mi in posuere. scelerisque massa...',
            url: ''
        },

        {
            title: 'lorem ipsum',
            photo: '/images/cards carrosel/campaigns_Item_03.png',
            alt: '',
            text: 'Lorem ipsum dolor sit amet consectetur. Etiam diam massa nunc vitae commodo nisi. Dolor velit sed eu orci ornare aliquet duis duis arcu. Cras tempus at feugiat gravida eget pellentesque mi in posuere. scelerisque massa...',
            url: ''
        },

        {
            title: 'lorem ipsum',
            photo: '/images/cards carrosel/campaigns_Item_03.png',
            alt: '',
            text: 'Lorem ipsum dolor sit amet consectetur. Etiam diam massa nunc vitae commodo nisi. Dolor velit sed eu orci ornare aliquet duis duis arcu. Cras tempus at feugiat gravida eget pellentesque mi in posuere. scelerisque massa...',
            url: ''
        },

        {
            title: 'lorem ipsum',
            photo: '/images/cards carrosel/campaigns_Item_03.png',
            alt: '',
            text: 'Lorem ipsum dolor sit amet consectetur. Etiam diam massa nunc vitae commodo nisi. Dolor velit sed eu orci ornare aliquet duis duis arcu. Cras tempus at feugiat gravida eget pellentesque mi in posuere. scelerisque massa...',
            url: ''
        },

    ])

    const carousel = useRef(null)
    



    const handleClickCarrosel = (k) => {
        console.log('clicou', k)
    }

    /* -------------------- */

    function CustomCarousel(props) {
        const slider = useRef(null);
        let isDown = useRef(false);
        let startX = useRef(null);
        let scrollLeft = useRef(null);

        useEffect(() => {
            if (slider && slider.current) {
                let sliderRef = slider.current;
                sliderRef.addEventListener("mousedown", one);
                sliderRef.addEventListener("mousedown", two);
                sliderRef.addEventListener("mouseleave", three);
                sliderRef.addEventListener("mouseup", four);
                sliderRef.addEventListener("mousemove", five);

                return () => {
                    sliderRef.removeEventListener("mousedown", one);
                    sliderRef.removeEventListener("mousedown", two);
                    sliderRef.removeEventListener("mouseleave", three);
                    sliderRef.removeEventListener("mouseup", four);
                    sliderRef.removeEventListener("mousemove", five);
                };
            }
        }, []);

        function one(e) {
            isDown.current = true;
            startX.current = e.pageX - slider.current.offsetLeft;
            scrollLeft.current = slider.current.scrollLeft;
        }

        function two(e) {
            isDown.current = true;
            startX.current = e.pageX - slider.current.offsetLeft;
            scrollLeft.current = slider.current.scrollLeft;
        }

        function three() {
            isDown.current = false;
        }

        function four() {
            isDown.current = false;
        }

        function five(e) {
            if (!isDown.current) return;
            e.preventDefault();
            const x = e.pageX - slider.current.offsetLeft;
            const walk = x - startX.current;
            slider.current.scrollLeft = scrollLeft.current - walk;
        }

        return (
            <div className="carrosel lg:h-[528px] md:h-[225px] " ref={slider}>
                {props.children}
            </div>
        );
    }

    function Box({ index }) {
        return <div className="box">Box {index}</div>;
    }

    return (

        <div className={className}>

            <div className="carroselContainer">

                <h1 className=' font-sans'>{title}</h1>


                {
                    type === 'card' && (


                        <CustomCarousel>

                            {
                                itemsCarrosel.map((item, key) =>

                                    <ScrollLink
                                        className="sm:w-[100px] sm:h-[100px] lg:w-[280px] lg:h-[280px] md:w-[220px] md:h-[220px]  sm:ml-[10px] lg:ml-[20px] rounded-[20px] box-border overflow-hidden "
                                        to={item.id}
                                        spy={true}
                                        smooth={true}
                                        duration={500}
                                        onClick={() => handleClickCarrosel(key)}
                                        key={key}
                                    >
                                        <Image
                                            width={500}
                                            height={500}
                                            className='w-full h-full'
                                            src={item.photo}
                                            alt={item.alt}
                                        />

                                    </ScrollLink>

                                )
                            }

                        </CustomCarousel>

                    )
                }

                {
                    type === 'news' && (
                        <>
                            <CustomCarousel>

                                {
                                    news.map((item, key) =>

                                        <div
                                            onClick={() => handleClickCarrosel(key)}
                                            key={key}
                                            className="md:w-[248px] md:h-[408px] lg:w-[358px] lg:h-[528px] flex items-center justify-center ml-[10px] lg:mr-[80px] rounded-[20px] "
                                        >

                                            <div
                                                className='md:w-[248px] md:h-[405px] lg:w-[338px] lg:h-[520px] bg-white box-border pr-[29px] pl-[29px] pt-[22.8px] shadow-black shadow-md rounded-[20px] overflow-hidden'
                                            >

                                                <Image
                                                    className='w-full ' src={item.photo} alt={item.alt} priority={true}
                                                />


                                                <h3 className='text-black text-[21px] font-sans font-bold uppercase leading-loose mb-[5px]' >{item.title}</h3>
                                                <p className='text-black text-base font-normal h-[165px]  overflow-hidden font-sans leading-normal'>{item.text}   </p>

                                            </div>

                                        </div>

                                    )
                                }

                            </CustomCarousel>
                        </>
                    )
                }

            </div>

        </div>

    )
}

import React from 'react';
import dynamic from 'next/dynamic';

// foto carrega dinamicamente
const dynamicImage = dynamic(() => import('next/image'));

const About = React.memo(({ image, photo, title, text, className }) => {
    return (

        <div className={className}>

            {photo == 1 && (
                <dynamicImage
                    className='rounded-[50%] lg:w-[575px] h-auto sm:w-[322px] md:w-[426px]'
                    src={image}
                    alt='Comemoração - Valor de uma Vida'
                />
            )}

            <section className='sm:ml-[20px] sm:mt-[25px] md:m-0  md:max-w-[443px]  '>

                <p className='text-center font-sans font-bold text-shadow mb-[30px] lg:text-[51px] md:text-[38px] capitalize'>
                    {title}
                </p>

                <div className='font-normal lg:text-[28px] md:text-[21px]  bg-green-400 leading-8 bg-lay'>

                    <p className='md:w-[448px]  md:ml-4 lg:ml-0'>
                        {text}
                    </p>

                </div>

            </section>

            {photo == 2 && (
                <dynamicImage className='rounded-[50%] lg:w-[575px] h-auto md:w-[426px]'
                    src={image}
                    alt='Entrega de presente - Valor de uma Vida'
                />
            )}

        </div>
    )
})

export default About;




import Image from 'next/image'
export default function About({ image, photo, title, text, className }) {

    return (

        <div className={className}>

            {photo == 1 && (
                <Image
                    className='rounded-[50%] lg:w-[575px] h-auto sm:w-[322px] md:w-[426px]'
                    src={image}
                    alt='Entrega de presente - Valor de uma Vida'
                />
            )}

            <section className='sm:ml-[20px] sm:mt-[25px] md:m-0  md:max-w-[443px]  '>

                <h1 className='text-center font-sans font-bold text-shadow mb-[30px] lg:text-[51px] md:text-[38px] capitalize'>
                    {title}
                </h1>

                <strong className='font-normal lg:text-[28px] md:text-[21px]  bg-green-400 leading-8 bg-lay'>
                    <h2 className='md:w-[448px]  md:ml-4 lg:ml-0'>

                        {text}
                    </h2>
                </strong>

            </section>

            {photo == 2 && (
                <Image className='rounded-[50%] lg:w-[575px] h-auto md:w-[426px]'
                    src={image}
                    alt='comemoração - Valor de uma Vida'
                />
            )}

        </div>
    )
}
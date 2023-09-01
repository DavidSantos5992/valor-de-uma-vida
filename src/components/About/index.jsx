import Image from 'next/image'
export default function About({ teste, photo, title, text, className }) {

    return (

        <div className={className}>

            {photo == 1 && (
                <Image className='rounded-[50%]' src={teste} />
            )}

            <section className='max-w-[443px]  '>

                <h1 className='text-center font-sans font-bold text-shadow mb-[30px] text-[51px] capitalize'>{title}</h1>

                <strong className='font-normal text-[28px] leading-8 bg-lay'>
                    {text}
                </strong>

            </section>

            {photo == 2 && (
                <Image className='rounded-[50%]' src={teste} />
            )}

        </div>
    )
}
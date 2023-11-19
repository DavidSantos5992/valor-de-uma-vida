import Image from "next/image"

export default function SectionPhoto() {
    return (
        <section className=" lg:w-[1213px] md:w-[758px] mr-auto ml-auto mb-[60px] mt-[60px] font-sans ">

            <strong >
                <h3 className="text-shadow font-bold sm:text-[28px] md:text-[38px] text-center lg:text-[67px] ">O Valor de Uma Vida</h3>
            </strong>

            <div className="w-full flex sm:flex-col md:flex-row md:justify-between  mt-[50px] mb-[27px] ">


                <Image
                    width={500}
                    height={500}
                    className="sm:mb-[52px]  lg:w-[512px] lg:h-[378px] md:w-[319.95px] md:h-[236.03px] rounded-[20px]"
                    src='/images/equipe.jpg'
                    alt="equipe valor de uma vida"
                />

                <p className="sm:w-[80%] sm:ml-auto sm:mr-auto md:mr-0 md:max-w-[340.95px] text-justify lg:max-w-[512px] lg:text-[28px] md:text-[20px] ">O Valor de Uma Vida é uma entidade não governamental fundada em 16/01/2014 que atua na área do terceiro setor em Várzea Paulista e região. Nosso objetivo principal é prestar auxílio a pessoas com vulnerabilidade social e portadoras de diversas doenças crônicas, como AVC, distrofia muscular, Alzheimer, paralisia cerebral, hidrocefalia, câncer, entre outras.</p>

            </div>

        </section>
    )
}
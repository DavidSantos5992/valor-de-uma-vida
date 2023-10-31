import Image from "next/image"
import photo from '../../../public/images/ana_Image.png'

export default function SectionPhoto() {
    return (
        <section className=" lg:w-[1213px] md:w-[758px] mr-auto ml-auto mb-[60px] mt-[60px] font-sans ">

            <strong >
                <h3 className="text-shadow font-bold sm:text-[28px] md:text-[38px] text-center lg:text-[67px] ">O Valor de Uma Vida</h3>
            </strong>

            <div className="w-full flex sm:flex-col md:flex-row md:justify-between  mt-[50px] mb-[27px] ">


                <Image className="sm:mb-[52px]  lg:w-[512px] lg:h-[378px] md:w-[319.95px] md:h-[236.03px] " src={photo} alt="Entrega de presente valor de uma vida" />

                <p className="sm:w-[80%]sm:ml-auto sm:mr-auto md:mr-0 md:max-w-[340.95px] lg:max-w-[512px]  lg:text-[28px] md:text-[20px] "> O Valor de Uma Vida é uma entidade não governamental que há 7 anos atua na área do 3º setor, que tem como objetivo principal prestar auxílio a pessoas com vulnerabilidade social e portadoras de diversas doenças crônicas, dentre elas o AVC, Distrofia Muscular, Alzheimer, Paralisia Cerebral, Hidrocefalia, Câncer, dentre outras doenças. Proporcionando, assim, uma melhora na qualidade de vida de seus usuários e familiares.</p>

            </div>

        </section>
    )
}
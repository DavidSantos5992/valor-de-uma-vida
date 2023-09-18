import Carrossel from "@/components/Carrossel"
import SectionPhoto from "@/components/SectionPhoto"
import Campaigns from "@/components/Campaigns"
export default function Home() {
  return (
    <>
      <Carrossel title={'campanhas'} type={'card'} className={'w-[1216px] h-[515px] ml-auto mr-auto '} />

      <SectionPhoto />

      <Carrossel title={'noticias'} type={'news'} className={'w-[1216px]  h-[637px]  absolute  left-[20%] z-20 top-[3320px] box-border  '} />

      <section className="w-full h-[1771px]  absolute top-[4837px] box-border pt-[60px] ">

        <h1 className="w-[484px] h-[60px] mr-auto ml-auto border-b-4 border-stone-900 text-black text-[38px] font-bold font-sans uppercase leading-[76.50px]">Campanhas realizadas</h1>

        <Campaigns />

      </section>

    </>
  )
}
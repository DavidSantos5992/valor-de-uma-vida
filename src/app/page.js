import Carrossel from "@/components/Carrossel"
import SectionPhoto from "@/components/SectionPhoto"
export default function Home() {
  return (
    <>
      <Carrossel title={'campanhas'} type={'card'} className={'w-[1216px] h-[515px] ml-auto mr-auto '}  />
      
      <SectionPhoto />

      <Carrossel title={'noticias'} type={'news'} className={'w-[1216px]  h-[637px]  absolute  left-[20%] z-20 top-[3320px] box-border  '}/>

    </>
  )
}
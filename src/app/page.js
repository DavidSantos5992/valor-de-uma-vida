import Carrossel from "@/components/Carrossel"
import SectionPhoto from "@/components/SectionPhoto"
export default function Home() {
  return (
    <>
      <Carrossel type={'card'} className={'w-[1216px] h-[515px] ml-auto mr-auto '} title={'campanhas'} />
      <SectionPhoto />

      {/* <Carrossel type={'news'} className={'w-full h-[528px] bg-red-500 absolute top-[3300px] flex items-center justify-center z-10 '}/> */}

    </>
  )
}

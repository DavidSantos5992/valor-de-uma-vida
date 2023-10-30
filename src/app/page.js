import Carrossel from "@/components/Carrossel"
import SectionPhoto from "@/components/SectionPhoto"
import Campaigns from "@/components/Campaigns"

import Natal_valor_de_uma_vida from '../../public/images/cards carrosel/campaigns_Item_01.png'
import Inverno_Solidario_valor_de_uma_vida from '../../public/images/cards carrosel/campaigns_Item_02.png'
import dia_das_criancas_valor_de_uma_vida from '../../public/images/cards carrosel/campaigns_Item_03.png'

import icon_natal_valor_de_uma_vida from '../../public/images/icon-natal-valor-de-uma-vida.svg'
import icon_inverno_valor_de_uma_vida from '../../public/images/icon_SnowMan.svg'
import icon_dia_das_criancas_valor_de_uma_vida from '../../public/images/icon_Teddy_Bear.svg'

import arrow_icon_rose from '../../public/images/btn_Icon-rose.svg'
import arrow_icon_blue from '../../public/images/btn_Icon-blue.svg'
import arrow_icon_emerald from '../../public/images/btn_btn_Icon-emerald.svg'


const natal = {
  title: 'natal solidário',
  photos: [Natal_valor_de_uma_vida, Natal_valor_de_uma_vida, Natal_valor_de_uma_vida],
  icon: icon_natal_valor_de_uma_vida,
  arrowIcon: arrow_icon_rose,
  alt: 'natal solidário valor de uma vida'
}

const inverno = {
  title: 'inverno solidário',
  photos: [Inverno_Solidario_valor_de_uma_vida, Inverno_Solidario_valor_de_uma_vida, Inverno_Solidario_valor_de_uma_vida],
  icon: icon_inverno_valor_de_uma_vida,
  arrowIcon: arrow_icon_blue,
  alt: 'inverno solidário valor de uma vida'

}

const diaDasCriancas = {
  title: 'dia das crianças',
  photos: [dia_das_criancas_valor_de_uma_vida, dia_das_criancas_valor_de_uma_vida, dia_das_criancas_valor_de_uma_vida],
  icon: icon_dia_das_criancas_valor_de_uma_vida,
  arrowIcon: arrow_icon_emerald,
  alt: 'dia das crianças solidário valor de uma vida'
}

export default function Home() {

  return (

    <>

      <Carrossel
        title={'campanhas'}
        type={'card'}
        className={'sm:w-[350px] md:w-[912px] lg:h-[515px] md:h-[350px] ml-auto mr-auto '}
      />

      <SectionPhoto />

      <div className="w-[100vw] flex items-center justify-center absolute z-20 top-[3320px] box-border ">

        {/* <Carrossel
          title={'noticias'}
          type={'news'}
          className={'lg:w-[1216px]  h-[637px] '}
        /> */}

      </div>

      <section className="w-full h-[1771px]  absolute top-[4837px] box-border pt-[60px] ">

        <h1 className="md:w-[322.67px] lg:w-[484px] h-[60px] mr-auto ml-auto border-b-4 border-stone-900 text-black md:text-[25.33px] lg:text-[38px] font-bold font-sans uppercase leading-[76.50px]">Campanhas realizadas</h1>

        <Campaigns
          campaign={natal}
          mainColor={'bg-rose-500'}
          fontColor={'text-rose-500'}
        />

        <Campaigns
          campaign={inverno}
          mainColor={'bg-sky-800'}
          fontColor={'text-sky-800'}
        />

        <Campaigns
          campaign={diaDasCriancas}
          mainColor={'bg-teal-300'}
          fontColor={'text-emerald-300'}
        />


      </section>

    </>
  )
}
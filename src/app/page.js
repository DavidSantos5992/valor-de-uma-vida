import dynamic from 'next/dynamic';
import Head from 'next/head';
const Carrossel = dynamic(() => import("@/components/Carrossel"));
const SectionPhoto = dynamic(() => import("@/components/SectionPhoto"));
const Campaigns = dynamic(() => import("@/components/Campaigns"), { ssr: false });


const natal = {
  title: 'natal solidário 2022',
  mainPhoto: '/images/cards carrosel/campaigns_Item_01.png',
  photos: ['/images/Campanhas/Natal/natal1.jpg', '/images/Campanhas/Natal/natal2.jpg', '/images/Campanhas/Natal/natal3.jpg'],
  icon: '/images/icon-natal-valor-de-uma-vida.svg',
  arrowIcon: '/images/btn_Icon-rose.svg',
  alt: 'natal solidário valor de uma vida'
}

const natal2023 = {
  title: 'natal solidário 2023',
  mainPhoto: '/images/cards carrosel/campaigns_Item_04.png',
  photos: ['/images/Campanhas/natal2023/ana.jpg', '/images/Campanhas/natal2023/papai-noel.jpg', '/images/Campanhas/natal2023/pintura.jpg'],
  icon: '/images/icon-natal-valor-de-uma-vida.svg',
  arrowIcon: '/images/btn_Icon-rose.svg',
  alt: 'natal solidário valor de uma vida'
}

const inverno = {
  title: 'inverno solidário',
  mainPhoto: '/images/cards carrosel/campaigns_Item_02.png',
  photos: ['/images/Campanhas/Inverno/inverno1.jpg', '/images/Campanhas/Inverno/inverno2.jpg', '/images/Campanhas/Inverno/inverno3.jpg'],
  icon: '/images/icon_SnowMan.svg',
  arrowIcon: '/images/btn_Icon-blue.svg',
  alt: 'inverno solidário valor de uma vida'
}


const diaDasCriancas = {
  title: 'dia das crianças',
  mainPhoto: '/images/cards carrosel/campaigns_Item_03.png',
  photos: ['/images/Campanhas/Dia_das_criancas/dia_das_criancas1.jpg', '/images/Campanhas/Dia_das_criancas/dia_das_criancas2.jpg', '/images/Campanhas/Dia_das_criancas/dia_das_criancas3.jpg'],
  icon: '/images/icon_Teddy_Bear.svg',
  arrowIcon: '/images/btn_btn_Icon-emerald.svg',
  alt: 'dia das crianças solidário valor de uma vida'
}

export default function Home() {

  return (

    <>
      

      <Carrossel
        title={'campanhas'}
        type={'card'}
        className={'sm:w-[280px] teste:w-11 text-stone-300 md:w-[700px] lg:w-[912px] overflow-hidden lg:h-[515px] md:h-[350px] ml-auto mr-auto '}
      />

      <SectionPhoto />

      <div className="w-[100vw] flex items-center justify-center absolute z-20 top-[3320px] box-border ">

        {/* <Carrossel
          title={'noticias'}
          type={'news'}
          className={'lg:w-[1216px]  h-[637px] '}
        /> */}

      </div>

      <section className="w-full sm:h-[1340px] md:h-[1771px]  absolute top-[4837px] box-border pt-[60px] ">

        <h1 className="sm:w-[90%] md:w-[322.67px] lg:w-[484px] h-[60px] text-shadow mr-auto ml-auto border-b-4 border-stone-900 text-black sm:text-[19.9px] sm:text-center lg:text-[38px] font-bold font-sans uppercase leading-[76.50px]">Campanhas realizadas</h1>

        <Campaigns
          campaign={natal}
          mainColor={'bg-rose-500'}
          fontColor={'text-rose-500'}
          id={'natal_solidario'}
          url={'https://www.instagram.com/p/Cm9OdnIuIQh/?img_index=1'}
        />
       
        <Campaigns
          campaign={natal2023}
          mainColor={'bg-rose-500'}
          fontColor={'text-rose-500'}
          id={'natal_solidario_2023'}
          url={'https://www.instagram.com/p/C04Kpa-scs2/?img_index=1'}
        />

        <Campaigns
          campaign={inverno}
          mainColor={'bg-sky-800'}
          fontColor={'text-sky-800'}
          id={'inverno_solidario'}
          url={'https://www.instagram.com/p/CSAEqB6Lezi/?img_index=1'}
        />

        <Campaigns
          campaign={diaDasCriancas}
          mainColor={'bg-teal-300'}
          fontColor={'text-emerald-300'}
          id={'diaDasCriancas_solidario'}
          url={'https://www.instagram.com/p/CyyCLOcg4Xn/?img_index=1'}
        />


      </section>

    </>
  )
}
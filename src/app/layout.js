import Head from 'next/head';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import About from '@/components/About';
import Button from '@/components/Button';
import SectionMakeDonation from '@/components/SectionMakeDonation';
import Image from 'next/image';
import './globals.css';

import logo from '../../public/images/hero_Logo.svg';
import fundo from '../../public/images/fundo.svg';
import foto_quem_somos_valor_de_uma_vida from '../../public/images/quem-somos-valor-de-uma-vida.png';
import escorregador_Valor_de_Uma_Vida from '../../public/images/escorregador-Valor-de-Uma-Vida.png';
import mesabrasilImg from '../../public/images/parceiros/img_Mesa_Brasil.svg';
import sescImg from '../../public/images/parceiros/img_Sesc.svg';
import ksbImg from '../../public/images/parceiros/img_KSB.svg';
import RotaryImg from '../../public/images/parceiros/img_Rotary.svg';
import bannerEscorregador from '../../public/images/banner_escorregador.svg';



const partners = [
  {
    name: 'Sesc parceiro Valor de uma Vida',
    image: sescImg
  },
  {
    name: 'Ksb parceiro Valor de uma Vida',
    image: ksbImg
  },
  {
    name: 'Mesa Brasil parceiro Valor de uma Vida',
    image: mesabrasilImg
  },
  {
    name: 'Rotary Varzea Paulista parceiro Valor de uma Vida',
    image: RotaryImg
  },
];

export const metadata = {
  title: 'Valor de uma Vida',
  description: 'Ong Valor de uma Vida',
};

export default function RootLayout({ children }) {

  return (

    <html lang="pt-br">

      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </Head>

      <body>

        <Header />

        <div className='sm: h-[539px] w-full lg:h-[688px] flex items-center relative box-border overflow-hidden'>

          <Image className='h-[100%] w-[100%] object-cover absolute top-0 left-0'
            src={fundo}
            alt='Fundo estatico da pagina'
          />

          <div className=' w-full h-[100%] flex items-center sm:justify-center md:justify-normal relative box-border pl-[25.45px] pr-[25.45px] background-Fundo'>

            <div className='flex items-center sm:flex-col md:flex-row sm:justify-center '>

              <Image className='lg:w-[135px] lg:h-[135px] md:w-[90px] md:h-[90px]' src={logo} alt='Logo valor de uma vida' />

              <h2 className='ml-[20px] font-bold font-sans uppercase lg:text-[28px] md:text-[18px] text-white text-shadow'>valor de uma vida</h2>
            
            </div>

            <div className='lg:w-[48%] md:w-[60%] h-[100%]  absolute lg:right-0  bg-layoutClipPath box-shadow-custom custom-clip-path'>

              <div className='w-full h-full relative '>

                <h1 className='max-w-[517px] text-shadow absolute right-[25px] top-[43%] lg:text-[21px] md:text-[18px] uppercase leading-[27px] text-white font-sans font-bold text-end whitespace-wrap'>
                  desde 2014 prestando auxílio <br /> a pessoas com <strong className='text-yellow-300'> Vulnerabilidades sociais</strong> e portadoras de diversas <strong className='text-yellow-300'>doenças crônicas</strong> Em <strong>várzea Paulista</strong>
                </h1>

              </div>

            </div>

          </div>

        </div>

        {children}

        <div>

          <div className='w-[100%] h-[992.668px]  absolute  top-[2020px]  lg:top-none right-0  bg-layoutClipPath2 box-shadow-custom custom-clip-path'></div>

          <About
            image={foto_quem_somos_valor_de_uma_vida}
            className={'w-[95%] flex justify-between items-center absolute lg:top-[2200px] md:top-[2280px] z-10'}
            photo={1}
            title={'Quem somos'}
            text={'Nossa instituição, desde 2014, vem prestando serviços com grande potencial na cidade de Várzea Paulista, onde nos localizamos. E, é claro, que ajudamos amigos de todos os lugares, levando o bem e a boa qualidade de vida.'}
          />

        </div>

        <div>
          <div className='w-[100%] h-[992.668px]  absolute top-[2513px] left-0  bg-layoutClipPath3 box-shadow-custom custom-clip-left'></div>

          <About
            image={escorregador_Valor_de_Uma_Vida}
            className={'w-[95%] flex justify-between items-center absolute top-[2780px] right-0 z-10'}
            photo={2}
            title={'sobre nós'}
            text={' Nossa equipe conta com pessoas engajadas em fazer o bem ao próximo, e devido a isso, realizamos nosso trabalho com muito amor e carinho aos nossos amigos que precisam de suporte, sejam eles pessoas doentes ou moradores de rua. Com carinho, recebemos todo tipo de auxílio, seja ele financeiro ou em espécie, pois o que realmente importa é o carinho e amor com o próximo.'}
          />
        </div>

        <div className='md:w-[594px] md:h-[800.668px] lg:w-[77%] lg:h-[992.668px]  absolute md:top-[3009px] lg:top-[3009px] right-0  bg-layoutClipPath4 box-shadow-custom custom-clip-left3 z-[2]'></div>
        {<div className='w-[90.728px] h-[2000.334px] bg-layoutClipPath2 absolute md:top-[2600px] lg:top-[2650px] md:rotate-[62deg] lg:rotate-[72deg] z-0'></div>}

        {<div className='md:w-[90.728px] lg:w-[90.728px] h-[2000.334px] bg-layoutClipPath2 absolute md:top-[2750px] lg:top-[2650px] md:rotate-[62deg] lg:rotate-[72deg] z-0'></div>}

        <SectionMakeDonation />

        <div className='w-full min-h-[600px] absolute top-[6550px] '>

          <div className="w-full min-h-[600px] relative ">

            <div className="md:w-[900px] lg:w-[1200px] h-[100px] absolute md:top-[-150px] lg:top-16 -left-[400px] bg-yellow-500 md:rotate-[-35deg] lg:-rotate-45 z-0"></div>

            <div className="md:w-[900px] lg:w-[1400px] h-[100px] absolute md:top-[-150px] lg:top-[90px] lg:-left-[300px] md:-left-[150px] bg-yellow-500 md:rotate-[-35deg] lg:-rotate-45 z-0"></div>



            <div className="md:w-[542.667px]  lg:w-[1000px] md:h-[285.333px] lg:h-[500px] absolute md:-top-[300px] lg:-top-[160px]  md:right-[0px] lg:-right-[250px] bg-blue-400 md:rotate-[36deg] lg:rotate-[36deg] z-0 custom-clip-blue-tablet"></div>

            <div className="w-full absolute md:top-0 lg:top-[384px] ">

              <h1 className='w-full mb-[180px] text-center text-black text-[38px]  font-bold font-sans uppercase leading-[76.50px]'>parceiros</h1>

              <div className="flex flex-wrap mb-[288px] ">

                {partners.map((element, index) => (

                  <Image className="md:w-[165.333px] lg:w-[200px] ml-auto mr-auto" key={index} src={element.image} alt={element.name} />

                ))}
              </div>

              <div className=" mb-[311px]">

                <div className="w-full relative ">

                  <Image className="w-full h-auto" src={bannerEscorregador} alt="Banner Valor de uma vida" />

                  <div className="w-full h-full flex flex-col items-center sm:justify-center box-border lg:pt-[369px]   bg-opacity-30 bg-black absolute top-0 left-0 z-10">

                    <p className="text-white md:text-[44px] lg:text-[67px] font-bold font-sans uppercase leading-[100.50px] text-shadow mb-[124px] ">Faça Parte Dessa História</p>

                    <Button
                      className='sm:w-[226.56px] sm:h-[27.33px] lg:w-[555.37px] lg:h-[67px] shadow-inner bg-yellow-400 shadow-black rounded-[39.59px] justify-center items-center text-black text-[21px] font-bold font-sans uppercase leading-loose'
                      title={'Seja nosso parceiro'}
                    />

                  </div>

                </div>

              </div>

              <Footer />

            </div>

          </div>

        </div>

      </body>
    </html>
  )

}
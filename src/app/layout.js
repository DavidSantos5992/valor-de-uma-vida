import Head from 'next/head';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import About from '@/components/About';
import Button from '@/components/Button';
import SectionMakeDonation from '@/components/SectionMakeDonation';
import Image from 'next/image';
import './globals.css';

import logo from '../../public/images/hero_Logo.svg';
import Whatsapp from '../../public/images/whatsapp_Icon_Fixed.svg';
import fundo from '../../public/images/fundo.svg';
import foto_quem_somos_valor_de_uma_vida from '../../public/images/quem-somos-valor-de-uma-vida.png';
import escorregador_Valor_de_Uma_Vida from '../../public/images/escorregador-Valor-de-Uma-Vida.png';
import mesabrasilImg from '../../public/images/parceiros/img_Mesa_Brasil.svg';
import sescImg from '../../public/images/parceiros/img_Sesc.svg';
import ksbImg from '../../public/images/parceiros/img_KSB.svg';
import RotaryImg from '../../public/images/parceiros/img_Rotary.svg';
import BannerPartner from '@/components/BannerPartner';



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

        <a
          className='fixed bottom-10 right-5 sm:w-[50px] z-[999]'
          href="https://api.whatsapp.com/send/?phone=5511933117977&text&type=phone_number&app_absent=0"
          target="_blank"
          rel="noopener noreferrer"
        >

          <Image
            src={Whatsapp}
            alt='icone whatsapp'
          />
        </a>

        <div className='sm: h-[539px] w-full lg:h-[688px] flex items-center relative box-border overflow-hidden'>

          <Image className='h-[100%] w-[100%] object-cover absolute top-0 left-0'
            src={fundo}
            alt='Fundo estatico da pagina valor de uma vida'
            priority={true}
          />



          <div
            id='inicio'
            className=' w-full h-[100%] flex items-center sm:justify-center md:justify-normal relative box-border pl-[25.45px] pr-[25.45px] background-Fundo'
          >

            <div className='flex items-center sm:flex-col md:flex-row sm:justify-center '>

              <Image
                className='lg:w-[135px] lg:h-[135px] md:w-[90px] md:h-[90px]'
                src={logo}
                alt='Logo valor de uma vida'
                priority={true}
              />

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

          <div className='sm:hidden md:block w-[100%] h-[992.668px]  absolute  top-[2020px]  lg:top-none right-0  bg-layoutClipPath2 box-shadow-custom custom-clip-path'></div>

          <div id="quem_somos">
            <About
              image={foto_quem_somos_valor_de_uma_vida}
              className={'w-[95%] sm:flex-col md:flex-row flex justify-between items-center absolute lg:top-[2200px] md:top-[2280px] z-10'}
              photo={1}
              title={'Quem somos'}
              text={'Nossa instituição, desde 2014, vem prestando serviços com grande potencial na cidade de Várzea Paulista, onde nos localizamos. E, é claro, que ajudamos amigos de todos os lugares, levando o bem e a boa qualidade de vida.'}
            />
          </div>

        </div>

        <div>

          <div className='sm:hidden md:block w-[100%] h-[992.668px]  absolute top-[2513px] left-0  bg-layoutClipPath3 box-shadow-custom custom-clip-left'></div>

          {/* md para cima  */}

          <div className='sm:hidden md:block' id='sobre_nos'>
            <About
              image={escorregador_Valor_de_Uma_Vida}
              className={'w-[95%]  flex justify-between items-center absolute top-[2780px] right-0 z-10 '}
              photo={2}
              title={'sobre nós'}
              text={' Nossa equipe conta com pessoas engajadas em fazer o bem ao próximo, e devido a isso, realizamos nosso trabalho com muito amor e carinho aos nossos amigos que precisam de suporte, sejam eles pessoas doentes ou moradores de rua. Com carinho, recebemos todo tipo de auxílio, seja ele financeiro ou em espécie, pois o que realmente importa é o carinho e amor com o próximo.'}
            />
          </div>

          {/* md para baixo  */}

          <div className='sm:block md:hidden'>

            <About
              image={escorregador_Valor_de_Uma_Vida}
              className={'w-[95%]  flex flex-col justify-between items-center absolute top-[2200px] right-0 z-10 '}
              photo={1}
              title={'sobre nós'}
              text={' Nossa equipe conta com pessoas engajadas em fazer o bem ao próximo, e devido a isso, realizamos nosso trabalho com muito amor e carinho aos nossos amigos que precisam de suporte, sejam eles pessoas doentes ou moradores de rua. Com carinho, recebemos todo tipo de auxílio, seja ele financeiro ou em espécie, pois o que realmente importa é o carinho e amor com o próximo.'}
            />

          </div>

        </div>

        <div className='sm:hidden md:block md:w-[594px] md:h-[800.668px] lg:w-[77%] lg:h-[992.668px]  absolute md:top-[3009px] lg:top-[3009px] right-0  bg-layoutClipPath4 box-shadow-custom custom-clip-left3 z-[2]'></div>

        <div className='sm:hidden md:block w-[90.728px] h-[2000.334px] bg-layoutClipPath2 absolute md:top-[2600px] lg:top-[2650px] md:rotate-[62deg] lg:rotate-[72deg] z-0'></div>

        {/* clip versão mobile quem somos */}

        <div className='sm:block md:hidden w-full h-[929px] bg-layoutClipPath2 clipPathMobile z-10'>

          <div className='md:hidden w-full h-[262px] bg-layoutClipPathMobile custom-clip-mobile '></div>


        </div>

        {/* clip versão mobile sobre nós*/}

        <div className='sm:block w-full sm:h-[1300px] md:h-[929px] bg-layoutClipPath4 absolute clipPathMobile sm:top-[2000px] md:hidden z-[-1]'></div>

        <div className='sm:hidden md:block md:w-[90.728px] lg:w-[90.728px] h-[2000.334px] bg-layoutClipPath2 absolute md:top-[2750px] lg:top-[2650px] md:rotate-[62deg] lg:rotate-[72deg] z-0'></div>

        <div className='sm:hidden md:block md:w-[90.728px] lg:w-[90.728px] h-[2000.334px] bg-layoutClipPath2 absolute md:top-[2750px] lg:top-[2800px] md:rotate-[62deg] lg:rotate-[72deg] z-0'></div>

        <SectionMakeDonation />

        <div className='w-full min-h-[600px] absolute top-[6550px] '>

          <div className="w-full min-h-[600px] relative ">

            <div className="md:w-[900px] lg:w-[1200px] h-[100px] absolute md:top-[-150px] lg:top-16 -left-[400px] bg-yellow-500 md:rotate-[-35deg] lg:-rotate-45 z-0"></div>

            <div className="md:w-[900px] lg:w-[1400px] h-[100px] absolute md:top-[-150px] lg:top-[90px] lg:-left-[300px] md:-left-[150px] bg-yellow-500 md:rotate-[-35deg] lg:-rotate-45 z-0"></div>



            <div className="md:w-[542.667px]  lg:w-[1000px] md:h-[285.333px] lg:h-[500px] absolute md:-top-[300px] lg:-top-[160px]  md:right-[0px] lg:-right-[250px] bg-blue-400 md:rotate-[36deg] lg:rotate-[36deg] z-0 custom-clip-blue-tablet"></div>

            <div id='parceiros' className="w-full absolute md:top-0 lg:top-[384px] ">

              <h1 className='w-full sm:mb-[80px] md:mb-[180px] text-center  text-black text-shadow text-[38px]  font-bold font-sans uppercase leading-[76.50px]'>parceiros</h1>

              <div className="flex flex-wrap mb-[288px] ">

                {partners.map((element, index) => (

                  <Image
                    className="sm:w-[100px] sm:mr-10 sm:mb-14 md:w-[165.333px] lg:w-[200px] ml-auto mr-auto"
                    key={index} src={element.image}
                    alt={element.name}
                  />

                ))}

              </div>

              <BannerPartner />


              <Footer />

            </div>

          </div>

        </div>

      </body>

    </html>
  )

}
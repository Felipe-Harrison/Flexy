import Image from "next/image";

import Slider from "../components/layout/Slider/Slider";
import SliderItem from "../components/layout/Slider/SliderItem";
import BlockDescription from "../components/layout/Blocks/Block-description";
import BlockContent from "../components/layout/Blocks/Block-content";
import BlockImage from "../components/layout/Blocks/Block-image";
import Logo from "@/public/static/logos/Logo";

import { modalidades } from "../context/modalidades";
 
export default function Home() {

  // Gambiarra 200
  function populateSlider() {
    let itens = []

    modalidades.forEach( modalidade => {
      itens.push(
        <SliderItem text={modalidade.title} image={modalidade.icon}/>
      );
    });
    return itens
}

  return (<>
    {/* LOGO */}
    <div className="flex justify-center p-2 md:hidden">
      <Logo
        height={100} 
        width={150}
      />
    </div>

    {/* PROMOCIONAL */}
    <div className="relative h-[66vh] overflow-y-hidden">
      <Image
        src={'/static/images/promocional/img-promocional-2.png'} 
        alt="Imagem promocional flexy"
        fill={true}
        style={{
          objectFit: 'cover', // cover, contain, none
        }}
      />
      <p className="
        absolute left-4 top-1/2 transform -translate-y-1/2
        w-4/12 md:3/12
        px-2 py-8
        text-6xl font-black text-white
        rounded-lg
      ">
        Comece hoje uma vida mais saudável
      </p>
    </div>

    {/* PLANOS */}
    <BlockContent
      id="planosFlexy"
      title="Nossos Planos"
    >
      <span className="
        grid justify-items-center grid-rows-2 md:grid-cols-2 md:grid-rows-none gap-2
      ">
        <BlockDescription
          title={"Plano Mensal Flexy"}
          image={"/static/images/planos/planomensal.png"}
          description={<>Este plano é perfeito para quem procura <strong>flexibilidade</strong> e um compromisso mensal renovável. Comece sua jornada fitness hoje e experimente a diferença que um mês pode fazer em sua saúde e bem-estar.</>}
          children={<div className="text-center mt-4 w-5/12 ml-auto">
            <p className="text-sm text-start">por apenas:</p>
            <p className=" text-5xl font-bold text-primary-500">$74<sup className="text-sm">,00</sup></p>
          </div>}
        />
        <BlockDescription
          title={"Plano Anual Flexy"}
          image={"/static/images/planos/planoanual.png"}
          description={<>Este plano é ideal para aqueles que buscam uma transformação <strong>duradoura</strong> e desejam maximizar sua experiência fitness. Faça do próximo ano o seu melhor ano - escolha o Plano Anual Flexy e embarque na jornada para uma vida mais saudável e ativa.</>}
          children={<>
            <div className="text-center mt-4 w-5/12 ml-auto">
              <p className="text-sm text-start">por apenas:</p>
              <p className="text-5xl font-bold text-primary-500"> <span className="text-base">12x</span> $68<sup className="text-sm">,00</sup></p>
            </div>
            <p className="text-xs mt-3 text-red-800 dark:text-red-400">O cancelamento do plano resultará em uma multa de 70% do valor restante do período contratado !</p>
          </>}
        />
      </span>
    </BlockContent>

    {/* MODALIDADES */}
    <BlockContent
      id="modalidadesFlexy"
      title="Nossas Modalidades"
    >
      <Slider items={populateSlider()}/>
    </BlockContent>
    
    {/* ESPAÇO */}
    <BlockContent
      id="expFlexy"
      title={<>Experiência <span className="text-primary-500">Flexy</span></>}
    >
      <span className="
        flex flex-col md:flex-row justify-evenly gap-4
        md:mx-7
      ">
        <BlockImage legend={"Melhores equipamentos"} image="/static/images/promocional/img-equip-1.jpg"/>
        <BlockImage legend={"Espaço preparado"} image="/static/images/promocional/img-equip-2.jpg"/>
        <BlockImage legend={"Equipe especializada"} image="/static/images/promocional/img-equip-3.jpg"/>
      </span>
    </BlockContent>
    {/* DETALHE MODALIDADE */}
    <BlockContent title="">
      <p className='text-xl font-bold my-5'>Seja Flexy, seja você! </p>
    </BlockContent>
  </>);
}

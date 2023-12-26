import Image from "next/image";

/**
 * Bloco de formatação para exibir imagem com descrição
 */
const BlockImage = ({image="",legend}) => {

    return(
    <div className="
        relative
        bg-green-900
        w-10/12 h-[33vh]
        rounded shadow-lg mx-auto
        md:transform md:hover:scale-105
        transition duration-500
    ">
        <Image 
            src={image} 
            alt="img-1" 
            fill
            className="rounded shadow border-2 border-content-light dark:border-content-dark"
        />
        <h3 className="
            absolute bottom-0 left-0
            rounded-b
            w-full bg-content-light dark:bg-content-dark py-2
            font-bold
        ">{legend}</h3> 
    </div>
    );
};

export default BlockImage;
import Image from "next/image";

/**
 * Bloco de formatação para exibir imagem com descrição
 */
const BlockDescription = ({title,image="",description,children}) => {

    return(
    <div className="
        w-10/12 px-3 py-9
        border-1 shadow rounded dark:bg-content-dark bg-content-light
        md:transform md:hover:scale-105
        transition duration-500
    ">
        <h3 className="font-bold">{title}</h3>
        <div className="my-3 p-2 w-fit mx-auto rounded-full border shadow dark:bg-content-light">
            <Image src={image} alt="img-1" width={160} height={160}/>
        </div>
        <p className="text-sm">{description}</p>
        {children}
    </div>
    );
};

export default BlockDescription;
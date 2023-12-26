
/**
 * Bloco de formatação para exibir conteudo
 */
const BlockContent = ({id="#id",title="Titulo Aqui",children}) => {

    return(
        <section id={id} className="
            flex flex-col gap-5 place-center text-center 
            py-5 scroll-mt
        ">
            <h2 className="text-2xl font-bold">{title}</h2>
            {children}
        </section>
    );
};

export default BlockContent;
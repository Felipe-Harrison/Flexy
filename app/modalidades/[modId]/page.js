import Link from 'next/link';
const Modalidade = ({params}) => {
    return(
        <div className="text-center w-full">
            Opa {params.modId}
            <p>
                <Link href="/">Voltar</Link>
            </p>
        </div>
    )
};

export default Modalidade;
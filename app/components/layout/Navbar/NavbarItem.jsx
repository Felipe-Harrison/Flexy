import Link from "next/link";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

/**
 * Componente de formatação para Items adicionados a Navbar
 * @param subitems (optional)
 */
const NavbarItem = ({title,subitems = [],link,onClose}) => {

    return(
        <div className='group text-text-light md:text-text-dark cursor-pointer my-5 md:my-0 text-xl md:text-base'>
            <div className='
                px-3 rounded
                font-bold
                transition duration-300
                md:group-hover:bg-content-light md:group-hover:text-text-light
            '>
                {link ? (
                    <Link href={link} onClick={() => onClose()}>
                        {title}
                    </Link>
                ) : 
                    title
                }
                {subitems.length !== 0 && (<ChevronDownIcon className="h-4 w-4 ml-1 md:inline hidden"/>)}
            </div>
            {subitems.length !== 0 && (
                <div 
                    className='
                    md:absolute md:transform md:-translate-x-2 md:z-10
                    w-full md:w-2/12
                    md:h-0 md:group-hover:h-fit
                    overflow-hidden
                    rounded-b-lg md:shadow
                    md:bg-bg-dark 
                '>
                    <ul className="flex flex-col gap-3 text-left p-3 ">
                        {subitems.map( subitem => (
                            <li className="
                                pl-2 rounded-lg 
                                transition duration-300 
                                hover:bg-primary-500 
                                py-2
                            ">
                                <Link href={subitem.href} onClick={() => onClose()}>
                                    {subitem.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default NavbarItem;
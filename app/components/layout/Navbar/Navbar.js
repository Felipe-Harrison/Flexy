'use client';
import classNames from "classnames";

import Logo from "@/public/static/logos/Logo";
import NavbarItem from "./NavbarItem";

import { modalidades } from "@/app/context/modalidades";
import { routes } from "@/app/context/routes";

/**
 * Componente da barra de navegação do sistema
 * @param reference -> React.useRef(ref)
 * @param isOpen -> Control navbar to sidebar (Mobile)
 * @param onClose -> Event trigger on close (Mobile)
 */
const Navbar = ({reference,isOpen,onClose}) => {

    return(
        <div
            className={classNames({
                "h-screen md:h-[17vh] md:w-full z-50" : true, //Size
                "bg-white-op75 md:dark:bg-content-dark text-text-light shadow": true, // Color
                "fixed left-0 top-0 w-8/12 md:sticky z-40":true, // Position
                "backdrop-filter backdrop-saturate-150 backdrop-blur-lg":true, // glass effect
                "transition-transform .3s ease-in-out md:translate-x-0": true, // Animation
                "-translate-x-full ": !isOpen, // State Control
                "md:grid md:grid-rows-2": true, // Items Control
            })}
            ref={reference}
        >
            <div className='
                flex justify-center md:grid 
                p-2
            '>
                <Logo
                    height={70} 
                    width={140}
                />
            </div>
            <div className='
                md:flex md:justify-start
                md:self-end     
                md:w-full 
                md:px-5 md:py-1 
                mt-2 md:mt-0
                md:bg-bg-dark
                border-t md:dark:border-content-dark 
            '>
                <NavbarItem
                    title="Inicio"
                    link={'/'}
                    onClose={() => onClose()}
                    />
                <NavbarItem 
                    title="Flexy"
                    subitems={routes}
                    onClose={() => onClose()}
                    />
                <NavbarItem
                    title="Sobre"
                    link={'/sobre'}
                    onClose={() => onClose()}
                />
            </div>
            
        </div>
    );
};

export default Navbar;
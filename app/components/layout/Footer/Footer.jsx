'use client'
import Logo from "@/public/static/logos/Logo";
import Link from "next/link";


const Footer = () => {
    return(
        <div className="
            w-full z-50 mt-7 pb-3 pt-1
            bg-content-light dark:bg-content-dark 
            text-text-light dark:text-text-dark
            shadow
        ">
            <div className='
                flex justify-center md:grid border-1 border-b
                py-4
                '>
                <Logo
                    height={70}
                    width={140}
                />
            </div>
            <div className="
                py-3 text-center leading-loose
            ">  
                <a className="text-sm" href="mailto:faleconosco@flexy.com">faleconosco@flexy.com</a>
                <h4>FLEXY CENTRO FITNESS</h4>
                <p>CNPJ:XX.XX.XXX/0001-XX</p>
            </div>
        </div>
    );
};

export default Footer;

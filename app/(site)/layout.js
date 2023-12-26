'use client';
import { Inter } from 'next/font/google'
import { useOnClickOutside } from 'usehooks-ts';
import { useState,useRef } from 'react';
import Navbar from "../components/layout/Navbar/Navbar"
import Footer from '../components/layout/Footer/Footer';
import { ListBulletIcon } from '@heroicons/react/24/outline';
import '../globals.css'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {

  const [showSidebar,setShowSidebar] = useState(false);
  const refSidebar = useRef(null);

  useOnClickOutside(refSidebar, (e) => {
    setShowSidebar(false);
  });

  return (
    <html lang="pt-BR">
      <Headers/>
      <body className={`
        min-h-screen w-full relative
        bg-bg-light text-text-light
        dark:bg-bg-dark dark:text-text-dark
        overflow-x-hidden
        scroll-custom
        ${inter.className}
      `}>
        <Navbar 
          reference={refSidebar} 
          isOpen={showSidebar} 
          onClose={() => setShowSidebar(false)}
        />
        <main className='h-full'>
          <button className="
            fixed left-3 top-3 z-10 
            h-10 w-10 px-1 lg:hidden 
            rounded-full
            backdrop-filter backdrop-saturate-150 backdrop-blur-lg
            bg-white-op75 dark:bg-black-op75 shadow
          " 
          onClick={() => setShowSidebar(true)}
          >
            <ListBulletIcon className='w-8 h-8'/>
          </button>
          {children}
        </main>
        <Footer/>
      </body>
    </html>
  );
};

const Headers = () => {

  return(
    <head>
      <meta charSet="UTF-8"/>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      <link rel="icon" href="../favicon.ico" />
      <meta name="title" content="Flexy"/>
      <meta name="description" content="Você quer se sentir mais saudável, ter uma vida mais ativa ou sair do sedentarismo? Então venha que o centro fitness Flexy vai te ajudar, a melhor opção custo benefício para você."/>
      <meta name="author" content="Flexy"/>
      <meta name="keywords" content="vida saudável, sedentarismo, centro fitness, academia, flexy, custo benefício"/>
      <title>Flexy</title>
    </head>
  );
};

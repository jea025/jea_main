"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../../public/j-logo.svg";
import { usePathname } from "next/navigation";

const Navbar: React.FC = () => {
  const pathname = usePathname();
  const activeClass = "border-l-2 border-white text-white font-bold";
  const defaultClass = "text-white hover:text-gray-300";

  return (
    <div className="w-full h-16">
      <nav className="w-full bg-customCyan flex justify-between items-center fixed 
      z-10 border-b-2 border-cyan-800">
        <Link href={'/home'} id="home">
          <Image className="w-wxl ml-16" src={logo} alt="logo" />
        </Link>
        <div className="h-16 flex items-center w-full justify-end mr-14">
        <Link href={"/home"}>
            <button
              id="inicio"
              className={`h-8 px-1 py-2 mx-4 my-1 ${
                pathname === "/home" ? activeClass : defaultClass
              }`}
            >
              INICIO
            </button>
          </Link>

          <Link href={"/journalism"}>
            <button
              id="conocenos más"
              className={`h-8 px-1 py-2 mx-4 my-1 ${
                pathname === "/journalism" ? activeClass : defaultClass
              }`}
            >
              CONOCENOS MÁS
            </button>
          </Link>
       
          <Link href={"/news"}>
            <button
              id="galería"
              className={`h-8 px-1 py-2 mx-4 my-1 ${
                pathname === "/news" ? activeClass : defaultClass
              }`}
            >
              GALERÍA
            </button>
          </Link>
       
          <Link href={"/contact"}>
            <button
              id="contacto"
              className={`h-8 px-1 py-2 mx-4 my-1 ${
                pathname === "/contact" ? activeClass : defaultClass
              }`}
            >
              CONTACTO
            </button>
          </Link>
          
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

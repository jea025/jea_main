"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../../public/logo.png";
import { usePathname } from "next/navigation";

const Navbar: React.FC = () => {
  const pathname = usePathname();
  const activeClass = "border-l-2 border-white text-white font-bold";
  const defaultClass = "text-white hover:text-gray-300";

  return (
    <div className="w-full h-16">
      <nav className="w-full bg-customCyan flex justify-between items-center fixed 
      z-10 border-b-2 border-cyan-800">
        <Link href={'/inicio'} id="home">
          <Image className="w-wxl ml-16" src={logo} alt="logo" />
        </Link>
        <div className="h-16 flex items-center w-full justify-end mr-14">
        <Link href={"/inicio"}>
            <button
              id="inicio"
              className={`h-8 px-1 py-2 mx-4 my-1 ${
                pathname === "/inicio" ? activeClass : defaultClass
              }`}
            >
              INICIO
            </button>
          </Link>
          <Link href={"/novedades"}>
            <button
              id="novedades"
              className={`h-8 px-1 py-2 mx-4 my-1 ${
                pathname === "/novedades" ? activeClass : defaultClass
              }`}
            >
              NOVEDADES
            </button>
          </Link>
       
          <Link href={"/contacto"}>
            <button
              id="contacto"
              className={`h-8 px-1 py-2 mx-4 my-1 ${
                pathname === "/contacto" ? activeClass : defaultClass
              }`}
            >
              CONTACTO
            </button>
          </Link>
          <Link href={"/prensa"}>
            <button
              id="prensa"
              className={`h-8 px-1 py-2 mx-4 my-1 ${
                pathname === "/prensa" ? activeClass : defaultClass
              }`}
            >
              PRENSA
            </button>
          </Link>
          <Link href={"/enlaces"}>
            <button
              id="enlaces"
              className={`h-8 px-1 py-2 mx-4 my-1 ${
                pathname === "/enlaces" ? activeClass : defaultClass
              }`}
            >
              ENLACES
            </button>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

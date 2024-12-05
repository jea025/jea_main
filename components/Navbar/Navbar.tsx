"use client";
import React, { useState } from "react";
import "./Navbar.css";
import Home from "../Home/Home";
import Nosotros from "../Nosotros/Nosotros";
import Contacto from "../Contacto/Contacto";
import Prensa from "../Prensa/Prensa";
import Enlaces from "../Enlaces/Enlaces";
import Image from "next/image";
import Link from "next/link";
import logo from "../../public/logo.png";
import ham from "../../public/ham.svg";

// Definimos el tipo para las secciones
type Section = "home" | "nosotros" | "contacto" | "prensa" | "enlaces";

const Navbar: React.FC = () => {
  // Estado para la sección activa, tipada como Section
  const [activeSection, setActiveSection] = useState<Section>("home");

  // Función para manejar la navegación entre secciones
  const handleNavigation = (section: Section) => {
    setActiveSection(section);
    changeActiveBorder(section);
  };

  // Cambiar el borde visual de la sección activa
  const changeActiveBorder = (section: Section) => {
    clearBorder();
    const element = document.getElementById(section);
    if (element) {
      element.classList.add("active");
    }
  };

  // Limpiar la clase activa de los elementos
  const clearBorder = () => {
    const homeElement = document.getElementById("home");
    if (homeElement) {
      homeElement.classList.remove("homeStyle");
    }
    const buttons = document.querySelectorAll<HTMLButtonElement>(".navButton");
    buttons.forEach((button) => {
      button.classList.remove("active");
    });
  };



  return (
    <div className="navbarContainer">
      <nav>
        <Image className="margin" src={logo} alt="logo" />
        <div className="navButtons">
          <Link href={"/home"}>
            <button id="home" className="navButton homeStyle">
              HOME
            </button>
          </Link>
          <Link href={"/nosotros"}>
            <button id="nosotros" className="navButton">
              NOSOTROS
            </button>
          </Link>
          <Link href={"/contacto"}>
            <button id="contacto" className="navButton">
              CONTACTO
            </button>
          </Link>
          <Link href={"/prensa"}>
            <button id="prensa" className="navButton">
              PRENSA
            </button>
          </Link>
          <Link href={'/enlaces'}>
            <button
              id="enlaces"
              className="navButton"
            >
              ENLACES
            </button>
          </Link>
        </div>
        <div className="hamNav margin">
          <input className="hamCheck" type="checkbox" id="ham" />
          <label htmlFor="ham">
            <Image className="hamSvg" src={ham} alt="menu" />
          </label>
          <div className="hamButtons">
            <button
              id="home"
              className="hamButton"
              onClick={() => handleNavigation("home")}
            >
              HOME
            </button>
            <button
              id="nosotros"
              className="hamButton"
              onClick={() => handleNavigation("nosotros")}
            >
              NOSOTROS
            </button>
            <button
              id="contacto"
              className="hamButton"
              onClick={() => handleNavigation("contacto")}
            >
              CONTACTO
            </button>
            <button
              id="prensa"
              className="hamButton"
              onClick={() => handleNavigation("prensa")}
            >
              PRENSA
            </button>
            <button
              id="enlaces"
              className="hamButton"
              onClick={() => handleNavigation("enlaces")}
            >
              ENLACES
            </button>
          </div>
        </div>
      </nav>

    </div>
  );
};

export default Navbar;

"use client"
import React, { useState } from "react";
import "./Navbar.css";
import Home from "../Home/Home";
import Nosotros from "../Nosotros/Nosotros";
import Contacto from "../Contacto/Contacto";
import Prensa from "../Prensa/Prensa";
import Enlaces from "../Enlaces/Enlaces";
import Image from "next/image";
import Link from "next/link";
import logo from "../../public/logo.png"
import ham from "../../public/ham.svg"

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

  // Renderizar el componente según la sección activa
  const renderSection = () => {
    switch (activeSection) {
      case "home":
        return <Home />;
      case "nosotros":
        return <Nosotros />;
      case "contacto":
        return <Contacto />;
      case "prensa":
        return <Prensa />;
      case "enlaces":
        return <Enlaces />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="navbarContainer">
      <nav>
        <Link href={"/home"}>
          <Image
            className="margin"
            src={logo}
            alt="logo"
          />
        </Link>
        <div className="navButtons">
          <button
            id="home"
            className="navButton homeStyle"
            onClick={() => handleNavigation("home")}
          >
            HOME
          </button>
          <button
            id="nosotros"
            className="navButton"
            onClick={() => handleNavigation("nosotros")}
          >
            NOSOTROS
          </button>
          <button
            id="contacto"
            className="navButton"
            onClick={() => handleNavigation("contacto")}
          >
            CONTACTO
          </button>
          <button
            id="prensa"
            className="navButton"
            onClick={() => handleNavigation("prensa")}
          >
            PRENSA
          </button>
          <button
            id="enlaces"
            className="navButton"
            onClick={() => handleNavigation("enlaces")}
          >
            ENLACES
          </button>
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
      {renderSection()}
    </div>
  );
};

export default Navbar;

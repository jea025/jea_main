"use client";
import "./ContenidoMenu.css";
import React from "react";
import Contenido from "../Contenido/Contenido";

/*
renderiza  segun la seccion un componente que muestra la cajita correspondiente- cada cajita tiene un callback 
que lo q hace es decirle q cuando se toque esa cajita esa es la seccion actual, a travez del estado
*/

const ContenidoMenu = () => {
  const secciones = [
    "universidad",
    "emprendedores",
    "solidaridad",
    "salud y deporte",
    "integración vs discriminación",
    "amor y sexualidad",
    "r.s.e. jóvenes y las empresas",
    "tiempo libre",
    "medioambiente",
    "radio",
  ];

  return (
    <div className="contenidoMenuContainer">
      <div className="seccionesContainer">
        {secciones.map((seccion) => {
          return (
            <div
              key={seccion}
              className="seccionBox"
            >
              <h3>{seccion}</h3>
            </div>
          );
        })}
      </div>
      <div className="divider"></div>
      {<Contenido categoria={activeSectionHome} />}
    </div>
  );
};

export default ContenidoMenu;

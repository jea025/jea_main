"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import "./GaleriaCeos.css";

// Importar las imágenes de CEOs
import ceos1 from '../../public/ceos y emprendedores.jpeg';
import ceos2 from '../../public/ceos y emprendedores (1).jpeg';
import ceos3 from '../../public/ceos y emprendedores (2).jpeg';
//import ceos3 from '../../public/ceos y emprendedores.png';

// Importar las imágenes de Colegios
import colegios1 from '../../public/colegios (1).jpeg';
import colegios2 from '../../public/colegios (2).jpeg';

// Importar las imágenes de Plantación
import plantacion1 from '../../public/Plantación.jpeg';
import plantacion2 from '../../public/plantación (2).jpeg';
import plantacion3 from '../../public/plantación (3).jpeg';

// Importar las imágenes de Plantación
import voluntariado1 from '../../public/voluntariado.jpeg';
import voluntariado2 from '../../public/voluntariado (2).jpeg';
import voluntariado3 from '../../public/voluntariado.jpg';

interface ImagenGaleria {
  src: any;
  alt: string;
  titulo?: string;
}

const imagenesGaleriaCeos: ImagenGaleria[] = [
  {
    src: ceos1,
    alt: "Entrevista con CEOs y Emprendedores - Sesión 1",
    titulo: "Entrevistas con CEO de GOOGLE"
  },
  {
    src: ceos2,
    alt: "Entrevista con CEOs y Emprendedores - Sesión 2",
    titulo: "Entrevista a Alejandro y Micaela Kelman"
  },
  {
    src: ceos3,
    alt: "Programa Jóvenes en Acción - Entrevistas",
    titulo: "Encuentros Inspiradores"
  }
];
  

const imagenesColegios: ImagenGaleria[] = [
  {
    src: colegios1,
    alt: "Alumnos secundarios en programa radial",
    titulo: "Jóvenes Conductores"
  },
  {
    src: colegios2,
    alt: "Estudiantes en producción de radio",
    titulo: "Experiencia Radiofónica"
  }
];

const imagenesPlantacion: ImagenGaleria[] = [
  {
    src: plantacion1,
    alt: "Proyecto de Forestación - Plantación de árboles",
    titulo: "Plantación de Árboles Frutales"
  },
  {
    src: plantacion2,
    alt: "Jóvenes plantando árboles",
    titulo: "Educación Ambiental"
  },
  {
    src: plantacion3,
    alt: "Proyecto Forestación, Educación y Valores",
    titulo: "Compromiso con el Medio Ambiente"
  }
];


const imagenesVoluntariado: ImagenGaleria[] = [
  {
    src: voluntariado1,
    alt: "Hogar",
    titulo: "V H"
  },
  {
    src: voluntariado2,
    alt: "Hogar",
    titulo: "Cumpleaños Hogar"
  },
  {
    src: voluntariado3,
    alt: "Hogar",
    titulo: "Festejo Hogar"
  }
];

export default function GaleriaCeos() {
  const [imagenSeleccionada, setImagenSeleccionada] = useState<{galeria: string, index: number} | null>(null);

  const abrirModal = (galeria: string, index: number) => {
    setImagenSeleccionada({galeria, index});
    document.body.style.overflow = 'hidden';
  };

  const cerrarModal = (e?: React.MouseEvent) => {
    if (e) {
      e.stopPropagation();
    }
    setImagenSeleccionada(null);
    document.body.style.overflow = 'unset';
  };

  const obtenerImagenesActuales = () => {
    if (!imagenSeleccionada) return [];
    switch(imagenSeleccionada.galeria) {
      case 'ceos': return imagenesGaleriaCeos;
      case 'colegios': return imagenesColegios;
      case 'plantacion': return imagenesPlantacion;
      case 'hogar': return imagenesVoluntariado; 
      default: return [];
    }
  };

  const navegarImagen = (e: React.MouseEvent, direccion: 'anterior' | 'siguiente') => {
    e.stopPropagation();
    if (!imagenSeleccionada) return;
    
    const imagenesActuales = obtenerImagenesActuales();
    let nuevoIndice;
    
    if (direccion === 'anterior') {
      nuevoIndice = imagenSeleccionada.index === 0 ? imagenesActuales.length - 1 : imagenSeleccionada.index - 1;
    } else {
      nuevoIndice = imagenSeleccionada.index === imagenesActuales.length - 1 ? 0 : imagenSeleccionada.index + 1;
    }
    setImagenSeleccionada({galeria: imagenSeleccionada.galeria, index: nuevoIndice});
  };

  // Navegación con teclado
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!imagenSeleccionada) return;
      
      const imagenesActuales = obtenerImagenesActuales();
      
      if (e.key === 'ArrowLeft') {
        const nuevoIndice = imagenSeleccionada.index === 0 ? imagenesActuales.length - 1 : imagenSeleccionada.index - 1;
        setImagenSeleccionada({galeria: imagenSeleccionada.galeria, index: nuevoIndice});
      } else if (e.key === 'ArrowRight') {
        const nuevoIndice = imagenSeleccionada.index === imagenesActuales.length - 1 ? 0 : imagenSeleccionada.index + 1;
        setImagenSeleccionada({galeria: imagenSeleccionada.galeria, index: nuevoIndice});
      } else if (e.key === 'Escape') {
        cerrarModal();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [imagenSeleccionada]);

  const renderGaleria = (imagenes: ImagenGaleria[], nombreGaleria: string) => (
    <div className="galeria-grid">
      {imagenes.map((imagen, index) => (
        <div 
          key={index} 
          className="imagen-container"
          onClick={() => abrirModal(nombreGaleria, index)}
          role="button"
          tabIndex={0}
          onKeyPress={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              abrirModal(nombreGaleria, index);
            }
          }}
        >
          <div className="imagen-wrapper">
            <Image
              src={imagen.src}
              alt={imagen.alt}
              className="imagen-galeria"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            <div className="overlay">
              <div className="overlay-content">
                <h3 className="imagen-titulo">{imagen.titulo}</h3>
                <p className="click-para-ampliar">Toca para ampliar</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <>
      {/* Primera sección - CEOs y Emprendedores */}
      <div className="galeria-ceos-container">
        <div className="descripcion-section">
          <h1 className="titulo-principal">
            <span className="texto-destacado">Jóvenes en Acción</span> en{" "}
            <span className="texto-radio">RADIO CULTURA</span>
          </h1>
          <h2 className="subtitulo">
            Entrevistas a <span className="texto-ceos">CEOS de Empresas</span>,{" "}
            <span className="texto-emprendedores">Emprendedores</span> y{" "}
            <span className="texto-especialistas">Especialistas</span>
          </h2>
          <p className="descripcion-texto">
            Descubre los momentos más inspiradores de nuestro programa radial, donde jóvenes 
            tienen la oportunidad única de entrevistar a líderes empresariales, emprendedores 
            exitosos y especialistas de diversas áreas, creando un puente generacional lleno 
            de aprendizaje y motivación.
          </p>
        </div>

        {renderGaleria(imagenesGaleriaCeos, 'ceos')}
      </div>

      {/* Segunda sección - Alumnos Secundarios */}
      <div className="segunda-seccion">
        <div className="descripcion-secundaria">
          <h2 className="titulo-secundario">
            <span className="texto-programas">Programas</span> con la{" "}
            <span className="texto-produccion">Producción y Conducción</span> de{" "}
            <span className="texto-alumnos">alumnos secundarios</span> de{" "}
            <span className="texto-colegios">distintos Colegios</span>
          </h2>
        </div>
        
        {renderGaleria(imagenesColegios, 'colegios')}
      </div>

      {/* Tercera sección - Forestación */}
      <div className="tercera-seccion">
        <div className="descripcion-terciaria">
          <h2 className="titulo-terciario">
            <span className="texto-proyecto">PROYECTO</span>{" "}
            <span className="texto-forestacion">FORESTACIÓN</span>,{" "}
            <span className="texto-educacion-valores">EDUCACIÓN</span> y{" "}
            <span className="texto-valores">VALORES</span>
          </h2>
        </div>
        
        {renderGaleria(imagenesPlantacion, 'plantacion')}
      </div>

      {/* Cuarta sección - Voluntariado */}
      <div className="cuarta-seccion">
        <div className="descripcion-cuarta">
          <h2 className="titulo-cuarto">
            <span className="texto-voluntariado">VOLUNTARIADO</span> en{" "}
            <span className="texto-forestacion">HOGAR</span> {" "}
            <span className="texto-educacion-valores">DE</span> {" "}
            <span className="texto-valores">NIÑOS</span> {" "}
            <span className="texto-forestacion">"Puerta </span>
            <span className="texto-educacion-valores">del</span> {" "}
            <span className="texto-valores">Cielo"</span>
          </h2>
        </div>
        
        {renderGaleria(imagenesVoluntariado, 'hogar')}
      </div>

      {/* Modal para imagen ampliada */}
      {imagenSeleccionada !== null && (() => {
        const imagenesActuales = obtenerImagenesActuales();
        const imagenActual = imagenesActuales[imagenSeleccionada.index];
        
        return (
          <div 
            className="modal-overlay" 
            onClick={cerrarModal}
            role="dialog"
            aria-modal="true"
          >
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <button 
                className="boton-cerrar" 
                onClick={cerrarModal}
                aria-label="Cerrar modal"
              >
                ×
              </button>
              
              <button 
                className="boton-navegacion boton-anterior"
                onClick={(e) => navegarImagen(e, 'anterior')}
                aria-label="Imagen anterior"
              >
                ‹
              </button>
              <button 
                className="boton-navegacion boton-siguiente"
                onClick={(e) => navegarImagen(e, 'siguiente')}
                aria-label="Imagen siguiente"
              >
                ›
              </button>

              <div className="imagen-modal-wrapper">
                <Image
                  src={imagenActual.src}
                  alt={imagenActual.alt}
                  className="imagen-modal"
                  fill
                  sizes="90vw"
                  priority
                />
              </div>
              
              <div className="info-imagen">
                <h3>{imagenActual.titulo}</h3>
                <p>{imagenSeleccionada.index + 1} de {imagenesActuales.length}</p>
              </div>
            </div>
          </div>
        );
      })()}
    </>
  );
}

"use client";
import "./Contenido.css";
import Noticia from "../Noticia/Noticia";
import contenido from "./contenido.json";
import NoticiasVacias from "../NoticiasVacias/NoticiasVacias";
import Spinner from "../Spinner/Spinner";
import React, { useState, useEffect } from "react"; //hooks

/*
    1-se usa el esado loading para mostrar que carga hasta q llega la informacion(fetch)
    2-se usa el estado arrCategoria para meter en un array todas las noticias de la categoria ingresada como parametro(props)
    3-se usa el hook useEffect para renderizar la noticia solo si primero tengo la informacion disponible
    4- 
*/
const Contenido = ({ categoria }) => {
  const [loading, setLoading] = useState(true);
  const [arrCategoria, setArrCategoria] = useState([]);

  const cantNoticias = 10; //se muestran 10 en la seccion general(maximo)
  const arrContenido = contenido.contenidoJSON;

  useEffect(() => {
    // Simular la carga de datos
    const fetchData = () => {
      const dataFiltrada = arrContenido
        .filter(
          (noticia) =>
            categoria === "general" || categoria === noticia.categoria
        ) //filtra array segun categoria
        .map(
          (
            noticia //recorre el array y renderiza un componente segun la informacion de la posicion del array
          ) => (
            <Noticia
              key={noticia.id}
              titulo={noticia.titulo}
              descripcion={noticia.descripcion}
              imgUrl={noticia.imgUrl}
              masUrl={`/noticia/${noticia.id}`}
              categoria={noticia.categoria}
            />
          )
        );

      if (categoria === "general" && dataFiltrada.length > cantNoticias) {
        const cantPorReducir = dataFiltrada.length - cantNoticias;
        for (let i = 0; i < cantPorReducir; i++) {
          const randomNumber = Math.floor(Math.random() * dataFiltrada.length);
          dataFiltrada.splice(randomNumber, 1);
        } //se acortan las noticias generales, que ademas son aleatorias. cuando esta en la seccion general
      }

      // BORRAR ===============================================
      setTimeout(() => {
        //se usa para relentizar 1,5 segundos cuando va a mostrar la noticia simulando la llegada de informacion a traves de la base de datos
        setArrCategoria(dataFiltrada);
        setLoading(false);
      }, 1500);
      // BORRAR ===============================================
    };

    fetchData();
  }, [arrContenido, categoria]);

  return (
    //se usa el ternario para que cuando loading sea true se renderize el spinner y si no, que se renderize la noticia correspondiente
    //si la noticia esta vacia se renderiza el componente q avisa q no hya noticia
    <div className="contenidoContainer">
      <h2>
        <span>|</span> {categoria}
      </h2>
      {loading ? (
        <Spinner />
      ) : arrCategoria.length > 0 ? (
        arrCategoria
      ) : (
        <NoticiasVacias />
      )}
    </div>
  );
};

export default Contenido;

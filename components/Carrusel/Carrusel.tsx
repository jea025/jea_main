"use client";
import "bootstrap/dist/css/bootstrap.min.css";
import car1 from "../../public/car1.jpeg";
import car2 from "../../public/car2.jpg";
import car3 from "../../public/car3.jpeg";
import Carousel from "react-bootstrap/Carousel";
import ExampleCarouselImage from "./ExampleCarouselImage";
import { useState } from "react";

export default function ControlledCarousel() {
  const [index, setIndex] = useState<number>(0);

  const handleSelect = (selectedIndex: number) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <ExampleCarouselImage img={car1}/>
        <Carousel.Caption>
          <p>Radio en vivo</p>
          <h2 className="">
            PROGRAMA MULTIMEDIAL, EDUCATIVO Y SOCIAL
            <br /> Los jueves de 20 a 21 h
            <a href="https://www.fmradiocultura.com.ar/radio-cultura-en-vivo" className="text-white"> www.fmradiocultura.com.ar/radio-cultura-en-vivo</a>
          </h2>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <ExampleCarouselImage img={car2} />
        <Carousel.Caption>
          <p>Salidas Culturales, Integradoras e Inclusivas   </p>
          <h2>
            Cines Debates con apoyo de Cinépolis y Mc Donald's
            <br /> Participaron más de 1.500 jóvenes
          </h2>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <ExampleCarouselImage img={car3} />
        <Carousel.Caption>
          <p>Salidas Culturales, Integradoras e Inclusivas</p>
          <h2>Visita al Museo de Malvinas</h2>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

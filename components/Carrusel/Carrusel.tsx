"use client";
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-bootstrap/Carousel";
import ExampleCarouselImage from "./ExampleCarouselImage";
import { useState } from "react";
import carouselData from "@/data/carousel.json";

// Importar imágenes dinámicamente
import car1 from "../../public/car1.jpeg";
import car2 from "../../public/car2.jpg";
import car3 from "../../public/car3.jpeg";

// Mapeo de imágenes
const imageMap: Record<string, any> = {
  "/car1.jpeg": car1,
  "/car2.jpg": car2,
  "/car3.jpeg": car3,
};

export default function ControlledCarousel() {
  const [index, setIndex] = useState<number>(0);

  const handleSelect = (selectedIndex: number) => {
    setIndex(selectedIndex);
  };

  const slides = carouselData.hero.slides;

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      {slides.map((slide) => (
        <Carousel.Item key={slide.id}>
          <ExampleCarouselImage img={imageMap[slide.image]} />
          <Carousel.Caption>
            <p>{slide.category}</p>
            <h2>
              {slide.title}
              {slide.subtitle && (
                <>
                  <br /> {slide.subtitle}
                </>
              )}
              {slide.link && (
                <a href={slide.link.url} className="text-white">
                  {" "}
                  {slide.link.text}
                </a>
              )}
            </h2>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

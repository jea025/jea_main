import Image, { StaticImageData } from "next/image";

interface propsCarrousel {
  img: StaticImageData;
  priority?: boolean;
}

export default function ExampleCarouselImage({ img, priority = false }: propsCarrousel) {
  return (
    <div className="w-full h-auto">
      <Image 
        src={img} 
        alt="image" 
        width={1920} 
        height={869}
        priority={priority}
        quality={85}
        placeholder="blur"
      />
    </div>
  );
}

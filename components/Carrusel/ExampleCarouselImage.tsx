import Image, { StaticImageData } from "next/image";

interface propsCarrousel {
  img: StaticImageData;
}

export default function ExampleCarouselImage({ img }: propsCarrousel) {
  return (
    <div className="w-full h-auto">
      <Image src={img} alt="image" width={1920} height={869} />
    </div>
  );
}

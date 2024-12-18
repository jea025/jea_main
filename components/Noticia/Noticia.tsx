import Image from "next/image";
import img1 from "../../public/contenido.jpg";
import img2 from "../../public/car1.png";
import img3 from "../../public/AxionLogo.png";
import React, { useState } from "react";
import Link from "next/link";

interface propsNoticia {
  uuid: string;
  titulo: string;
  descripcion: string;
  imgUrl: string;
  categoria: string;
}

const mockImages = [img1, img2, img3];

export default function Noticia({
  uuid,
  titulo,
  descripcion,
  // imgUrl, TODO: habilitar cuando tenga las imágenes en el bucket
  categoria,
}: propsNoticia) {
  const [verCompleto, setVerCompleto] = useState(false);

  const getRandomImage = () => {
    const randomIndex = Math.floor(Math.random() * mockImages.length);
    return mockImages[randomIndex];
  };
  const randomImage = getRandomImage();
  return (
    <div className="flex flex-col gap-4 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-transform transform hover:-translate-y-1 w-full max-w-md mx-auto">
      <Image
        src={randomImage}
        alt="noticia"
        width={300}
        height={200}
        className="rounded-lg object-cover mx-auto"
      />
      <h3 className="text-lg font-bold text-gray-800">
        <span className="text-customCyan">| </span>
        {titulo}
      </h3>
      <h4 className="text-sm text-gray-500">{categoria}</h4>
      <p className="text-sm text-gray-700 leading-relaxed">
        {verCompleto
          ? descripcion
          : descripcion.length > 150
          ? `${descripcion.slice(0, 150)}...`
          : descripcion}
      </p>
      <button
        onClick={() => setVerCompleto(!verCompleto)}
        className="self-start text-customCyan text-sm underline hover:text-teal-600"
      >
        {verCompleto ? "Mostrar menos" : "Ver mas"}
      </button>
      <Link href={`/news/${uuid}`}>
        <button className="self-start text-customCyan text-sm underline hover:text-teal-600">
          Vista completa
        </button>
      </Link>
    </div>
  );
}

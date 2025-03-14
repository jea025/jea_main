import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";

interface propsNoticia {
  uuid: string;
  titulo: string;
  descripcion: string;
  image: string;
  author: string;
}

export default function Noticia({
  uuid,
  titulo,
  descripcion,
  image,
  author,
}: propsNoticia) {
  const [verCompleto, setVerCompleto] = useState(false);

  return (
    <div className="flex flex-col gap-4 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-transform transform hover:-translate-y-1 w-full max-w-md mx-auto">
      <div className="flex flex-col h-full">
        <div className="bg-slate-100 flex h-1/3 w-full ">
          <Image
            src={image}
            alt="noticia"
            width={300}
            height={100}
            className="rounded-lg object-contain mx-auto"
          />
        </div>
        <h3 className="text-lg font-bold text-gray-800">
          <span className="text-customCyan">| </span>
          {titulo}
        </h3>
        <div className=" bg-slate-50 mt-6 h-full max-h-72">
          <p className="text-sm text-gray-700">
            {verCompleto
              ? `${descripcion.slice(0, 250)}...`
              : descripcion.length > 100
              ? `${descripcion.slice(0, 80)}...`
              : descripcion}
          </p>
        </div>
        <h4 className="text-lg text-gray-800 ">{author}</h4>
      </div>

      <div className="flex flex-col">
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
    </div>
  );
}

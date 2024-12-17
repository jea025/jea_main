import { getNewsByUUID } from "@/app/service/newsService";
import Image from "next/image";
import Link from "next/link";
import img from "../../../public/contenido.jpg";

interface EditNewsPageProps {
  params: {
    uuid: string;
  };
}

export default async function NewsSelected({ params }: EditNewsPageProps) {
  const { uuid } = params;
console.log(params.uuid, " params")
  console.log(uuid, "newsSelected")
  const newsData = await getNewsByUUID(uuid);
 
  if (!newsData) {
    return <div>No se encontró la noticia.</div>;
  }
  return (
    <div className=" min-h-screen bg-cover bg-center bg-cyan-700 flex p-6">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-full w-full">
        <h2 className="text-4xl font-bold mb-4 text-gray-700 text-start">
        <span className="text-customCyan">| </span>{newsData.title}
        </h2>
        <h3 className="text-3xl font-medium mb-2 text-cyan-600 m-8">
          {newsData.author}
        </h3>
        <div className="flex flex-row p-8 gap-10">
          <Image
            src={img}
            alt={"a"}
            width={800}
            height={400}
            className="rounded-md mb-4"
          />
          <p className="text-2xl text-gray-800 leading-relaxed">
            {newsData.body}
          </p>
        </div>
        <Link
          href="/news"
          className="mt-6  text-cyan-700 underline text-2xl w-full flex items-center justify-center"
        >
          Volver a las noticias
        </Link>
      </div>
    </div>
  );
}

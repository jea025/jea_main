import { getNewsByUUID } from "@/app/service/newsService";
import Image from "next/image";
import Link from "next/link";
//import img from "../../../public/contenido.jpg";

interface EditNewsPageProps {
  params: {
    uuid: string;
  };
}

export default async function NewsSelected({ params }: EditNewsPageProps) {
  const { uuid } = params;
  const newsData = await getNewsByUUID(uuid);

  if (!newsData) {
    return <div>No se encontró la noticia.</div>;
  }
  return (
    <div className=" min-h-screen bg-cover bg-center flex p-1">
      <div className="bg-white p-2 rounded-lg shadow-lg max-w-full w-full">
        <h2 className="text-4xl font-bold mb-4 text-gray-700 text-start">
          <span className="text-customCyan">| </span>
          {newsData.title}
        </h2>

        <div className="flex flex-row ">
          <div className="h-1/3 w-1/4 flex-col  flex-2">
            <Image
              src={newsData.image}
              alt={"a"}
              width={400}
              height={400}
              className="rounded-md mb-4"
            />
            <h3 className="text-xl font-medium mb-2 text-cyan-900 m-8">
              <strong>Autor: </strong>
              {newsData.author}
            </h3>
          </div>

          <div className="h-1/3 w-full flex-col flex-1 p-4">
            <p className="text-2xl text-gray-800 leading-relaxed">
              {newsData.body}
            </p>
          </div>
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

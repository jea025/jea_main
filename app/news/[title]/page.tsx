import { getNewsByTitle } from "@/app/service/newsService";

interface EditNewsPageProps {
  params: {
    title: string;
  };
}

export default async function NewsSelected({ params }: EditNewsPageProps) {
  const { title } = await params;
  const decodedTitle = decodeURIComponent(title);
  const newsData = await getNewsByTitle(decodedTitle);
  if (!newsData) {
    return <div>No se encontró la noticia.</div>;
  }
  return (
    <div className="h-auto w-auto gap-20 flex flex-col ml-10 mt-20 mb-10">
      <h2>Titulo: <br/>{newsData.title}</h2>
      <h3>Contenido: <br/>{newsData.body}</h3>
      <h3>Author: <br/>{newsData.author}</h3>
      <h4>Imagen:<br/>{newsData.image}</h4>
    </div>
  );
}

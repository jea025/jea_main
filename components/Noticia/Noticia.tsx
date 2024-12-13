import Image from "next/image";
import "./Noticia.css";
import img from "../../public/contenido.jpg";
import Link from "next/link";

interface propsNoticia {
  titulo: string;
  descripcion: string;
  imgUrl: string;
  categoria: string;
}

export default function Noticia({
  titulo,
  descripcion,
  //imgUrl, TODO: habilitar cuando tenga las imagenes en el bucket
  categoria,
}: propsNoticia) {
  return (
    <div className="noticiaContainer">
      <div className="noticiaInfo">
        <div>
          <h3>{titulo}</h3>
          <h4>{categoria}</h4>
          <p>{descripcion}</p>
        </div>
        <Link href={`/novedades/${titulo.replaceAll(" ", "-")}`}>
          <h4 className="text-customCyan underline text-sm">Ver noticia completa</h4>
        </Link>
      </div>
      <Image src={img} width={650} height={300} alt="noticia" />
    </div>
  );
}

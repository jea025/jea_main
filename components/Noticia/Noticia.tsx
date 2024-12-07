import Image from "next/image";
import "./Noticia.css";
import img from "../../public/contenido.jpg"

interface propsNoticia{
  titulo: string;
  descripcion: string; 
  imgUrl: string; 
  categoria: string;
}

export default function Noticia ({ titulo, descripcion, imgUrl, categoria }: propsNoticia) {
  return (
    <div className="noticiaContainer">
      <div className="noticiaInfo">
        <div>
          <h3>{titulo}</h3>
          <h4>{categoria}</h4>
          <p>{descripcion}</p>
        </div>
        {imgUrl}
      </div>
      <Image src={img} width={650} height={300} alt="noticia" />
    </div>
  );
};


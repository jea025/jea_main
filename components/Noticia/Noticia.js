import Image from "next/image";
import "./Noticia.css";
import img from "../../public/contenido.jpg"

//se usan los props para mostrar datos de un objeto
//se usa el link de react router para ir a una nueva ruta
const Noticia = ({ titulo, descripcion, imgUrl, masUrl, categoria }) => {
  return (
    <div className="noticiaContainer">
      <div className="noticiaInfo">
        <div>
          <h3>{titulo}</h3>
          <h4>{categoria}</h4>
          <p>{descripcion}</p>
        </div>
        <h1>{masUrl}</h1>
      </div>
      <Image src={img} width={650} height={300} alt="noticia" />
    </div>
  );
};

export default Noticia;

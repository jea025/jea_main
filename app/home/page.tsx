import Carrusel from "../../components/Carrusel/Carrusel"
import ContenidoMenu from "../../components/ContenidoMenu/ContenidoMenu"

export default function HomePage() {
  return (
    <div className="w-full h-auto overflow-x-hidden">
      <div className="w-full h-auto overflow-x-hidden">
        <Carrusel />
      </div>
      <ContenidoMenu/>
    </div>
  );
}

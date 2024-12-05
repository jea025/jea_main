import Carrusel from "../Carrusel/Carrusel";
import ContenidoMenu from "../ContenidoMenu/ContenidoMenu";
import Footer from "../Footer/Footer";

export default function HomePage() {
  return (
    <div className="w-full h-auto overflow-x-hidden">
      <div className="home">
        <Carrusel />
      </div>
      <ContenidoMenu />
      <Footer />
    </div>
  );
}

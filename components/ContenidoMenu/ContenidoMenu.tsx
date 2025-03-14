import Contenido from "../Contenido/Contenido";

export default function ContenidoMenu(): JSX.Element {

  return (
    <div className="h-auto flex flex-col items-center justify-center">
      <Contenido />
      <div className="flex flex-wrap gap-14 w-full justify-center items-center mb-10">
      </div>
    </div>
  );
}

import Contenido from "../Contenido/Contenido";

export default function ContenidoMenu(): JSX.Element {
  const secciones: string[] = [
    "universidad",
    "emprendedores",
    "solidaridad",
    "salud y deporte",
    "integración vs discriminación",
    "amor y sexualidad",
    "r.s.e. jóvenes y las empresas",
    "tiempo libre",
    "medioambiente",
    "radio",
  ];

  return (
    <div className="h-auto flex flex-col items-center justify-center mt-3 pt-12">
      <Contenido />
      <div className="w-full h-1 bg-gray-300 mt-24 mb-24 border-r-1"></div>
      <div className="flex flex-wrap gap-14 w-full justify-center items-center mb-10">
        {secciones.map((seccion) => (
          <div
            key={seccion}
            className="bg-customCyan border-r-2 cursor-pointer text-white uppercase w-52 flex items-center justify-center h-16 filter drop-shadow-custom transition-all duration-500 select-none px-3 py-5 hover:bg-[#1b929c]"
          >
            <h4 className="text-xl hover:text-xl2">{seccion}</h4>
          </div>
        ))}
      </div>
    </div>
  );
}

import Image from "next/image";
import AxionLogo from "../../public/AxionLogo.png";

export default function Footer() {
  return (
    <div className="w-full h-1/3 flex items-center justify-center flex-col">
      <div className="bg-gradient-to-r from-cyan-50 to-customCyan w-full flex items-center justify-end pl-28 pr-20">
        <p className="text-center select-none text-white mr-8 font-bold">
          Con el apoyo de
        </p>
        <Image src={AxionLogo} width={320} height={156} alt="AxionLogo" />
        <p className="text-center select-none font-bold text-white mt-28">
          Patrocinador oficial de Jóvenes en Acción
        </p>
      </div>
      <div className="bg-customCyan w-full pt-6">
        <h3 className="text-white text-center select-none font-light">
          Jovenes en Acción 2024 - Todos los derechos reservados &copy;
        </h3>
      </div>
    </div>
  );
}

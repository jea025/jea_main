import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 to-white flex items-center justify-center px-4">
      <div className="max-w-2xl w-full text-center">
        {/* Título 404 */}
        <h1 className="text-9xl font-bold text-customCyan mb-4">
          404
        </h1>

        {/* Mensaje */}
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">
          Página no encontrada
        </h2>
        
        <p className="text-xl text-gray-600 mb-8 max-w-md mx-auto">
          Lo sentimos, la página que buscas no existe o ha sido movida.
        </p>

        {/* Botones */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link 
            href="/home"
            className="bg-customCyan hover:bg-cyan-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg"
          >
            Volver al inicio
          </Link>
          
          <Link 
            href="/gallery"
            className="bg-white hover:bg-gray-50 text-customCyan font-semibold py-3 px-8 rounded-lg border-2 border-customCyan transition-all duration-300 hover:scale-105"
          >
            Ver galería
          </Link>
        </div>

        {/* Decoración */}
        <div className="mt-16 text-gray-400">
          <p className="text-sm">
            Si crees que esto es un error, por favor contáctanos.
          </p>
        </div>
      </div>
    </div>
  );
}

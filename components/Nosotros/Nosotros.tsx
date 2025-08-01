import Cards from "./Cards";

export default function Nosotros() {
  return (
    <div className="w-full h-auto">
      <div className="mt-8 mb-8 p-4">
        <h2 className="mt-8 mb-8">
          <span className="text-customCyan2">|</span> Acerca de nosotros
        </h2>
        <p className="text-xl">
          Jóvenes en Acción nació en 1997 como un programa de radio (en Radio Cultura), para contar con un espacio destinado reflejar el sentir y pensar de adolescentes (alumnos secundarios a cargo de la producción y 
          conducción), sobre temas que les interesan y/o preocupan, en la búsqueda de respuestas a sus inquietudes e interrogantes, dándoles voz, un espacio reflexivo en un medio de comunicación, facilitando el trabajo en 
          equipo y el desarrollo de habilidades socioemocionales. Desde el 2003, jóvenes mayores de 18 años también participan del programa, algunos están en la facultad, otros quizás cursando el secundario, la universidad o 
          egresaron, otros están trabajando o liderando proyectos sociales o emprendimientos productivos. Nuestra misión consiste en brindarles un lugar de expresión y encuentro, de modo de sembrar una mayor conciencia y 
          compromiso social. Esta propuesta cumple ya 28 años de trayectoria, con la idea, producción y realización de la Lic. Carmen Sicardi quien pensó este proyecto al ver la necesidad de ofrecer una mirada optimista y 
          esperanzadora sobre la juventud. Desde sus inicios hasta la fecha más de 24.000 jóvenes participaron. Gran cantidad de estudiantes secundarios de colegios de Buenos Aires provenientes de escuelas públicas, privadas, 
          de distintas confesiones religiosas y laicas hicieron posible reflejar las distintas realidades que viven los chicos, superando las diferencias, creando un verdadero diálogo. 
        </p>
      </div>
      <div className="flex flex-col justify-center items-center h-size bg-no-repeat bg-cover bg-fixed bg-center bg-radio">
        <h2 className="text-center select-none text-4xl text-customCyan3">
          ¿Dónde puedo escuchar “Jóvenes en Acción”?
        </h2>
        <h3 className="text-center select-none text-2xl text-white w-2/3">
          El programa Jóvenes en Acción se emite por Radio Cultura, los jueves de 20 a 21 h, durante el periodo: Febrero-Diciembre o a través de internet en
          <a href="https://www.youtube.com/@radioculturaba/streams" className="text-white">
            {" "}            
            https://www.youtube.com/@radioculturaba/streams
          </a>
        </h3>
      </div>

      /*<Cards />
      <div className="w-full h-1 bg-gray-300 mt-24 mb-24 border-r-1"></div>  
      <div className="flex justify-center w-full mt-20 mb-12 gap-28 bg-white">
        <div className="flex flex-col w-2/5 bg-white m-2 rounded-lg">
          <h2 className="mt-8 mb-8">
            <span className="text-customCyan2"> |</span> De la radio a la Web...
          </h2>
          <p className="m-6 text-xl">
            Desde el 2001, nuestra participación en la radio se extendió a la 
            web a través del lanzamiento de nuestro sitio
            www.jovenesenaccion.net. De este modo nos decidimos llegar a todos
            los jóvenes, pensando en vos, que estás por terminar el colegio, o
            te estas preguntando qué carrera elegir, o estudias en la
            universidad, o estás trabajando. Sabemos que tus exigencias y
            necesidades no son fáciles de cumplir mente satisfechas. ¿Buscas en
            la red alguna ayuda para los problemas de todos los días?. Estas
            buscando trabajo y no sabes preparar un curriculum y menos sobre
            presentarte a tu primera entrevista para buscar empleo o estas en
            duda de elegir una carrera , ni sabes a dónde ir de vacaciones, te
            sugerimos algunas lecturas que nos parece que son interesantes y
            variadas. Buscamos que consultes nuestras secciones para que las
            compartas con amigos, compañeros de clase artículos de interés,
            fotos y etc..
          </p>
        </div>

        <div className="flex flex-col w-2/5 bg-white m-2 rounded-lg">
          <h2 className="mt-8 mb-8">
            <span className="text-customCyan2">|</span> Impacto
          </h2>
          <p className="m-6 text-xl">
            Somos conscientes que cada vez más, los jóvenes tienen un mayor
            acceso a Internet y a las nuevas tecnologías. Con frecuencia navegan
            en la red intercambiando información, comunicándose. Aprovechamos esta oportunidad para
            que en nuestro sitio encuentres eso que te estaba faltando sobre las
            dudas que tenias sobre trabajo, estudio, salud y
            espacios de ocio y recreación. De esta manera sabrás donde buscar
            antes de perderte por Google, aquí tenés una buena opción. 
          </p>
        </div>
      </div>*/

      {/* INICIO DEL CÓDIGO DEL VIDEO - AQUI DEBES INSERTARLO */}
      <div className="flex justify-center">
        <h2 className="text-2xl font-semibold text-gray-800 text-center mt-10 mb-6">Conoce nuestra trayectoria</h2>
      </div>
      <div
        style={{
          position: 'relative',
          width: '100%',
          maxWidth: '800px',
          paddingBottom: '56.25%', // Proporción 16:9
          height: 0,
          margin: '20px auto',
        }}
      >
        <iframe
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
          }}
          src="https://www.youtube.com/embed/epeA8cUV_ng"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      {/* FIN DEL CÓDIGO DEL VIDEO */}
    </div>
      
    </div>
  );
}

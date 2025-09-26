import Cards from "./Cards";

export default function Nosotros() {
  return (
    <div className="w-full h-auto">
      <div className="mt-8 mb-8 p-4">
        <h2 className="mt-8 mb-8">
          <span className="text-customCyan2">|</span> Acerca de nosotros
        </h2>
        <p className="text-xl">
          Jóvenes en Acción nació en 1997 como un programa de radio en Radio Cultura creado por la Lic. Carmen Sicardi, fundadora y directora del proyecto. Su objetivo fue crear un espacion donde los adolescentes pudieran expresar con 
          libertad, responsabilidad y compromiso su sentir y pensar.  
          <br />
          Alumnos secundarios a cargo de la producción y conducción, abordan temas que despiertan su interés o generan preocupación en la búsqueda de respuestas a sus inquietudes supervisados en sus colegios por la Lic. Sicardi. 
          Así, se les brinda un espacio reflexivo en un medio de comunicación, promueve el trabajo en equipo y el desarrollo de habilidades socioemocionales. Hasta la fecha participaron 60 colegios de CABA y GBA.
          <br />
          Desde 2010, amplió su accionar a jóvenes mayores de 17 años (estudiantes del último año del secundario, de la universidad, profesionales, que provienen de distintas realidades socioeconómicas, jóvenes líderes de ONGS o 
          emprendimientos), para entrevistar en la radio a CEOS, directivos de empresas y especialistas, generando un puente entre generaciones para que los inspiren. También intermedia para que los jóvenes, en situación de vulnerabilidad 
          social, obtengan becas universitarias, a quienes acompaña a lo largo de sus carreras y facilita el acceso empleos.
          <br />
          En el 2012, la Lic. Sicardi comenzó a implementar diferentes proyectos por fuera del espacio radial, en alianza con ONGs, Empresas e Instituciones públicas y privadas de Argentina, así como la embajada de EEUU en Argentina y Fundación Konrad Adenauer, 
          ampliando su alcance a nivel nacional. 
          <br />
          Se consolidó como una organización que tiene el apoyo institucional de la Fundación FECIC, Fundación para la Educación, la Ciencia y la Cultura y es miembro de HELP ARGENTINA y de Fundación Potenciar Solidario.  <span className="font-bold"> Ha impactado en más de 24.000 niños, adolescentes y jóvenes de todo el país.
          </span>
          <br /> <br />
          Accionar de Jóvenes en Acción: distintos programas que se implementan en Buenos Aires y en diferentes provincias de Argentina:
          <br />
          
          <span className="font-bold"> Programa “Salidas Culturales, Inclusivas e Integradoras” </span>
          <br /> 
          Salidas gratuitas que incluyen cines-debate, exposiciones y eventos en la Ciudad de Buenos Aires y el Gran Buenos Aires, favoreciendo la integración de jóvenes de distintas realidades socioeconómicas, con el fin de generar espacios de encuentro enriquecedores y promover el intercambio de experiencias en torno a sus carreras y vocaciones. A su vez, organiza actividades con jóvenes con discapacidad. 
          <br /><br />
            
          <span className="font-bold"> Programa “Capacitaciones en Oratoria y Comunicación Corporal” </span>
          <br />            
          Talleres dirigidos a estudiantes secundarios, universitarios y profesionales (presenciales y/o virtuales) que ofrecen herramientas para potenciar su seguridad y favorecer su desarrollo personal, académico, social y profesional.
          <br/>
            
          <span className="font-bold"> Programa Voluntariado </span> 
          <br />
          Actividades de voluntariado -recreativas, culturales, educativas y de promoción de valores- para ayudar a niños y adolescentes de hogares, escuelas y ONG. Los jóvenes voluntarios, entre ellos estudiantes universitarios y profesionales, comparten experiencias y desarrollan habilidades como compromiso, trabajo en equipo y liderazgo. Además, se organizan funciones solidarias de cine-debate de Metegol para 200 chicos que nunca fueron al cine, con el apoyo de empresas y ONG.
          <br/>
            
          <span className="font-bold"> Programa “Forestación, Educación y Valores” </span> 
          <br />
          Programa federal de triple impacto en el que 25 jóvenes líderes de Argentina -primeros estudiantes universitarios de sus familias- comparten su testimonio de vida inspirador a alumnos secundarios de escuelas de zonas vulnerables, en las localidades de origen de cada joven. Junto con los adolescentes, plantan árboles frutales que darán alimento saludable y contribuyen al cuidado del medio ambiente. Hasta el momento, se plantaron 57 árboles del total de 250 planificados.
          <br/>

          <span className="font-bold"> Encuentros Nacionales de Jóvenes Líderes </span> 
          <br />
          Entre 2013 y 2018 se realizaron 10 encuentros con un total de 100 estudiantes universitarios -primeros de sus familias- provenientes de 16 provincias, seleccionados por ONG que los becaban en sus estudios para recibir capacitaciones, adquirir experiencias en empresas e instituciones y participar en actividades culturales y de voluntariado. Los encuentros se llevaron a cabo en la Ciudad Autónoma de Buenos Aires (CABA) y en siete provincias, con el apoyo de un valioso equipo de jóvenes estudiantes universitarios y profesionales, el Departamento de Estado de EE. UU. y su embajada en Argentina, la Fundación Konrad Adenauer, empresas y en alianza con diversas ONG.
          <br/>
            
          Nuestra misión consiste en brindarles un lugar de expresión y encuentro, de modo de sembrar una mayor conciencia y compromiso social. Esta propuesta cumple ya 28 años de trayectoria, 
          con la idea, producción y realización de la Lic. Carmen Sicardi quien pensó este proyecto al ver la necesidad de ofrecer una mirada optimista y esperanzadora sobre la juventud. Desde sus inicios hasta la fecha más de 24.000 jóvenes participaron. Gran cantidad de estudiantes secundarios de colegios de Buenos Aires provenientes de escuelas públicas, privadas, 
          de distintas confesiones religiosas y laicas hicieron posible reflejar las distintas realidades que viven los chicos, superando las diferencias, creando un verdadero diálogo. 
        </p>
      </div>
      
      <div className="flex flex-col justify-center items-center h-size bg-no-repeat bg-cover bg-fixed bg-center bg-radio">
        <h2 className="text-center select-none text-4xl text-customCyan3">
          ¿Dónde puedo escuchar &quot;Jóvenes en Acción&quot;?
        </h2>
        <h3 className="text-center select-none text-2xl text-white w-2/3">
          El programa Jóvenes en Acción se emite por Radio Cultura, los jueves de 20 a 21 h, durante el periodo: Febrero-Diciembre o a través de internet en
          <a href="https://www.youtube.com/@radioculturaba/streams" className="text-white">
            {" "}            
            https://www.youtube.com/@radioculturaba/streams
          </a>
        </h3>
      </div>

      <Cards />      
      
      <div className="w-full h-1 bg-gray-300 mt-24 mb-24 border-r-1"></div>  
      {/* <div className="flex justify-center w-full mt-20 mb-12 gap-28 bg-white">
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
      </div>*/}
      

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
  );
}

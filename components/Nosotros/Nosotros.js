import './Nosotros.css';
import Footer from '../Footer/Footer';

const Nosotros = () => {
    return (
        <div className='nosotrosContainer'>
            <div className='primerTexto'>
                <h2 className="texto">¿Qué es jóvenes en Acción?</h2>
                <p className="texto">
                Jóvenes en Acción” nació en 1997 como un programa de radio, a partir de la idea de lograr un espacio destinado reflejar el sentir y pensar de los jóvenes, presentando temas de interés e información clara en respuesta a 
                sus inquietudes e interrogantes. Nuestra misión consiste lograr brindarles un lugar de expresión y encuentro, de modo de sembrar una mayor conciencia y compromiso social en donde se pongan en discusión los hechos de la realidad actual.
                Esta propuesta cumple ya 15 años de trayectoria, con la idea, producción y realización de la Lic. Carmen Sicardi quien pensó este proyecto al ver la necesidad de ofrecer una mirada optimista y esperanzadora sobre la juventud. Desde sus
                inicios hasta la fecha más de 9.200 jóvenes participaron en la producción integral del programa. Gran cantidad de estudiantes 
                secundarios de colegios de Buenos Aires provenientes de escuelas públicas, privadas, de distintas confesiones religiosas y laicas hicieron posible reflejar 
                las distintas realidades que viven los chicos, superando las diferencias, creando un verdadero diálogo. Desde el 2003, jóvenes mayores de 18 años también participan del programa, algunos están en la facultad, otros quizás cursando el 
                secundario en una escuela nocturna, otros están trabajando o liderando proyectos sociales o emprendimientos productivos.
                </p>
            </div>
            <div className="textoImgBackground">
                <h2>¿Dónde puedo escuchar “Jóvenes en Acción”?</h2>
                <h3>El programa Jovenes en Acción se emite por Radio Cultura F.M.97.9 Mhz, los jueves de 20 a 21hs,durante el periodo : Abril-Diciembre o a través de internet en www.fmradiocultura.com.ar</h3>
            </div>
            <div className="container">
                <div className="box">
                    <h2 className="columna">De la radio a la Web...</h2>
                        <p className="columna textoSecundario">
                            Desde el 2001, nuestra participación en la radio se extendió a la web a través del lanzamiento 
                            de nuestro sitio www.jovenesenaccion.net. De este modo nos decidimos llegar a todos los jóvenes, 
                            pensando en vos, que estás por terminar el colegio, o te estas preguntando qué carrera elegir,
                            o estudias en la universidad, o estás trabajando. Sabemos que tus exigencias y necesidades no son 
                            fáciles de cumplir mente satisfechas. ¿Buscas en la red alguna ayuda para los problemas de todos los días?. 
                            Estas buscando trabajo y no sabes preparar un curriculum y menos sobre presentarte a tu primera entrevista 
                            para buscar empleo o estas en duda de elegir una carrera , ni sabes a dónde ir de vacaciones, te sugerimos 
                            algunas lecturas que nos parece que son interesantes y variadas. Buscamos que consultes nuestras secciones 
                            para que las compartas con amigos, compañeros de clase artículos de interés, fotos y etc..
                        </p>
                </div>
                <div className="box">
                    <h2 className="columna">¿Por qué puede ser tan útil internet?</h2>
                        <p className="columna textoSecundario">
                            Somos conscientes que cada vez más, los jóvenes tienen
                            un mayor acceso a Internet y a las nuevas tecnologías. Con frecuencia navegan 
                            en la red intercambiando información, comunicándose y en redes sociales como Facebook o myspace. 
                            Aprovechamos esta oportunidad para que en nuestro sitio encuentres eso que te estaba faltando sobre las dudas que tenias sobre trabajo, 
                            estudio, sexualidad, salud y espacios de ocio y recreación. De esta manera sabrás donde buscar antes de perderte por Google, aquí tenés una buena opción.

                            Sabemos que quizás “te gusta una chica o un chico”, ¿pensas que ya sabes todo sobre el AMOR, sobre la sexualidad, el noviazgo?, Tenemos algo para decirte.
                            ¿Sos de los que te quejas cuando ves a personas que discriminan a otras pero no te detenés a pensar si vos también algunas veces discriminas a otros?. Nos
                            interesa que todos los jóvenes del país nos brinden sus aportes para poder publicarlos, en especial nos interesaría contar con tus testimonios sobre cuáles
                            son los desafíos que te planteas, tus preocupaciones, desde tu lugar, desde tu realidad cotidiana
                        </p>                
                </div>
            </div>

            <div className='segundaSeccion'>
                <div className='cards'>
                    <div className="flip-card">
                        <div className="flip-card-inner">
                            <div className="flip-card-front mision">
                                <h2>MISIÓN</h2>
                            </div>
                            <div className="flip-card-back">
                                <h2>Misión</h2>
                                <p>
                                    Nuestro objetivo es no solo acrecentar, sino también fortalecer los valores fundamentales en la juventud
                                    mientras atraviesan esta crucial etapa de sus vidas. Queremos hacerlo dentro de un marco de referencia
                                    sólido y bien definido, que sirva como guía y orientación para los jóvenes, proporcionando una visión
                                    integral que abarca todos los aspectos de su desarrollo personal y social. Es fundamental que este
                                    enfoque los acompañe, brindándoles las herramientas necesarias para enfrentar los desafíos y tomar
                                    decisiones basadas en principios éticos, que les permitan crecer como individuos íntegros y
                                    responsables dentro de la sociedad.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="flip-card">
                        <div className="flip-card-inner">
                            <div className="flip-card-front vision">
                                <h2>VISIÓN</h2>
                            </div>
                            <div className="flip-card-back">
                                <h2>Visión</h2>
                                <p>
                                El portal Jóvenes en Acción busca ser un espacio para que los jóvenes se desarrollen como
                                personas y ciudadanos, basándose en valores como la superación personal, el trabajo y la solidaridad.
                                A través de diálogo y formación ética, promueven la paz y preparan a los jóvenes para liderar un
                                futuro mejor, enfrentando los desafíos actuales como la corrupción y la inseguridad. El objetivo es ayudar a
                                los jóvenes a crecer integralmente y a construir relaciones saludables, superando las dificultades
                                de la vida cotidiana.
                                </p>
                        </div>
                        </div>
                </div>
            </div>
            </div>
            <Footer />
        </div>
    )
}

export default Nosotros;
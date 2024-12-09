import "./Cards.css";

export default function Card(){
    return(
        <div >
        <div className="cards">
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front mision">
                <h2>MISIÓN</h2>
              </div>
              <div className="flip-card-back">
                <h2>Misión</h2>
                <p>
                  Nuestro objetivo es no solo acrecentar, sino también
                  fortalecer los valores fundamentales en la juventud mientras
                  atraviesan esta crucial etapa de sus vidas. Queremos hacerlo
                  dentro de un marco de referencia sólido y bien definido, que
                  sirva como guía y orientación para los jóvenes, proporcionando
                  una visión integral que abarca todos los aspectos de su
                  desarrollo personal y social. Es fundamental que este enfoque
                  los acompañe, brindándoles las herramientas necesarias para
                  enfrentar los desafíos y tomar decisiones basadas en
                  principios éticos, que les permitan crecer como individuos
                  íntegros y responsables dentro de la sociedad.
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
                  El portal Jóvenes en Acción busca ser un espacio para que los
                  jóvenes se desarrollen como personas y ciudadanos, basándose
                  en valores como la superación personal, el trabajo y la
                  solidaridad. A través de diálogo y formación ética, promueven
                  la paz y preparan a los jóvenes para liderar un futuro mejor,
                  enfrentando los desafíos actuales como la corrupción y la
                  inseguridad. El objetivo es ayudar a los jóvenes a crecer
                  integralmente y a construir relaciones saludables, superando
                  las dificultades de la vida cotidiana.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}
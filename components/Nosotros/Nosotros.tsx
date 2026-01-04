import Cards from "./Cards";
import aboutData from "@/data/about.json";

export default function Nosotros() {
  const { about, radio, video } = aboutData;

  return (
    <div className="w-full h-auto">
      <div className="mt-8 mb-8 p-4">
        <h2 className="mt-8 mb-8">
          <span className="text-customCyan2">|</span> {about.title}
        </h2>
        <p className="text-xl">
          {about.description.map((paragraph, index) => (
            <span key={index}>
              {paragraph}
              <br />
              {index < about.description.length - 1 && <br />}
            </span>
          ))}
          
          {/* Enlaces a partners */}
          {about.partners.map((partner, index) => (
            <span key={index}>
              <a
                href={partner.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-customCyan2 font-bold hover:text-cyan-600 transition-colors duration-300 underline decoration-customCyan2 hover:decoration-cyan-600 decoration-2 underline-offset-2"
              >
                {partner.fullName || partner.name}
              </a>
              {index < about.partners.length - 1 && ", "}
              {index === about.partners.length - 2 && " y de "}
            </span>
          ))}
          .{" "}
          <span className="font-bold">{about.impact}</span>
          <br />
          <br />
          
          {/* Programas */}
          {about.programs.map((program) => (
            <span key={program.id}>
              <span className="font-bold">Programa "{program.name}"</span>
              <br />
              {program.description}
              <br />
              <br />
            </span>
          ))}
        </p>
      </div>

      {/* Sección de radio */}
      <div className="flex flex-col justify-center items-center h-size bg-no-repeat bg-cover bg-fixed bg-center bg-radio">
        <h2 className="text-center select-none text-4xl text-customCyan3">
          {radio.title}
        </h2>
        <h3 className="text-center select-none text-2xl text-white w-2/3">
          {radio.description}
          <a href={radio.youtubeUrl} className="text-white">
            {" "}
            {radio.youtubeUrl}
          </a>
        </h3>
      </div>

      <Cards />

      <div className="w-full h-1 bg-gray-300 mt-24 mb-24 border-r-1"></div>

      {/* Video de YouTube */}
      <div className="flex justify-center">
        <h2 className="text-2xl font-semibold text-gray-800 text-center mt-10 mb-6">
          {video.title}
        </h2>
      </div>
      <div
        style={{
          position: "relative",
          width: "100%",
          maxWidth: "800px",
          paddingBottom: "56.25%",
          height: 0,
          margin: "20px auto",
        }}
      >
        <iframe
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
          }}
          src={`https://www.youtube.com/embed/${video.youtubeId}`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}

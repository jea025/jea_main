import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

export default function Enlaces() {
  return (
    <div className="flex flex-col items-center space-y-4 mb-6 w-screen h-50">
      <h3 className="text-xl font-semibold text-white">
        Síguenos en nuestras redes sociales
      </h3>
      <div className="flex space-x-6">
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
        >
          <FaFacebook className="text-4xl text-white hover:text-cyan-200" />
        </a>
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Twitter"
        >
          <FaTwitter className="text-4xl text-white hover:text-gray-100" />
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <FaInstagram className="text-4xl text-white hover:text-gray-100" />
        </a>
        <a
          href="https://youtube.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="YouTube"
        >
          <FaYoutube className="text-4xl text-white hover:text-gray-100" />
        </a>
      </div>
    </div>
  );
}

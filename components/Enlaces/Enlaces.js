import './Enlaces.css';
import Footer from '../Footer/Footer';
import Image from 'next/image';

const Enlaces = () => {
    return (
        <div>
            <div className="enlacesContainer">
                <h2 className="tituloEnlaces"><span className="barraEnlaces">|</span> ENLACES</h2>
                <div className="contenedorTarjetasEnlaces">
                    <div className="cajaTarjetaEnlace">
                        <h3>YOUTUBE</h3>
                        <a href="https://www.youtube.com/watch?v=cb12KmMMDJAA" target="_blank" rel="noreferrer"><Image src='/youtube.svg' alt='youtub' /></a>
                    </div>
                    <div className="cajaTarjetaEnlace">
                        <h3>FACEBOOK</h3>
                        <a href="https://www.facebook.com/radio.jovenesenaccion" target="_blank" rel="noreferrer"><Image src='/facebook.svg' alt='youtub' /></a>
                    </div>
                    <div className="cajaTarjetaEnlace">
                        <h3>INSTAGRAM</h3>
                        <a href="https://www.instagram.com/jovenes.enaccion/" target="_blank" rel="noreferrer"><Image src='/instagram.svg' alt='youtub' /></a>
                    </div>
                    <div className="cajaTarjetaEnlace">
                        <h3>COMUNIDAD</h3>
                        <a href="https://www.youtube.com/watch?v=cb12KmMMDJAA" target="_blank" rel="noreferrer"><Image src='/youtube.svg' alt='youtub' /></a>
                    </div>
                    <div className="cajaTarjetaEnlace">
                        <h3>ENCUENTROS</h3>
                        <a href="https://www.youtube.com/watch?v=cb12KmMMDJAA" target="_blank" rel="noreferrer"><Image src='/youtube.svg' alt='youtub' /></a>
                    </div>
                    <div className="cajaTarjetaEnlace">
                        <h3>CONFERENCIAS</h3>
                        <a href="https://www.youtube.com/watch?v=cb12KmMMDJAA" target="_blank" rel="noreferrer"><Image src='/youtube.svg' alt='youtub' /></a>
                    </div>
                </div>
            </div>
            <Footer />
        </div>

    )
}

export default Enlaces;
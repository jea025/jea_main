import './Home.css';

import ContenidoMenu from '../ContenidoMenu/ContenidoMenu';
import Footer from '../Footer/Footer';
import Carrusel from '../Carrusel/Carrusel';

const Home = () => {
    return (
        <div className='homeContainer'>
            <div className='home'>
                <Carrusel />
            </div>
            <ContenidoMenu />
            <Footer />
        </div>
    )
}

export default Home;
import Image from 'next/image';
import './NotFound.css';

//segun el prop muestra un mensaje de error
const NotFound = ({ mensaje }) => {
    return (
        <div className='notfoundContainer'>
            <Image src='/notfound.svg' alt='notfound' />
            <h2>{mensaje}</h2>
            <p>Esta página no existe o se produjo un error.</p>
            <a href='/home'>Volver al inicio</a>
        </div>
    )
}

export default NotFound;
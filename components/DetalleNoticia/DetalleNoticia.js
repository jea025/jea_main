import './DetalleNoticia.css';
import Footer from '../Footer/Footer';
import NotFound from '../NotFound/NotFound';
import Spinner from '../Spinner/Spinner';
import { useNavigate, useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import detalle from "./detalles.json";
import Image from 'next/image';



const DetalleNoticia = () => {
    const [loading, setLoading] = useState(true);
    const [objNoticia, setObjNoticia] = useState(null);
    const navigate = useNavigate();
    const { id } = useParams();//se usa el useParams para accedewr a la variable de la url llamada id. de esta manera renderizo la noticia que tenga ese ID

    
    useEffect(() => {
        const fetchData = () => {
            const noticia = detalle.contenidoJSON[id];
            setTimeout(() => {
                setObjNoticia(noticia);
                setLoading(false);
            }, 1500);
        };

        fetchData();
    }, [id]);

    if (loading) {
        return (
            <div className='spinnerContainer'>
                <Spinner />
            </div>
        );
    }

    //si no esta la noticia disponible,m se muestra noticia no disponible
    if (!objNoticia) {
        return (
            <div className='containerDetalleNoticia'>
                <NotFound mensaje={'La noticia no existe o no está disponible'} />
            </div>
        );
    }

    //se renderiza la noticia con el dato del objeto
    return (
        <div className='containerDetalleNoticia'>
            <div className='goBack'>
                <button onClick={() => navigate(-1)}>← volver</button>
            </div>
            <div className='contenido'>
                <h3>{objNoticia.titulo}</h3>
                {objNoticia.subtitulo ? <h4>{objNoticia.subtitulo}</h4> : null}
                <h5>{objNoticia.categoria}</h5>
                <p>{objNoticia.descripcion}</p>
                <Image src={objNoticia.imgUrl} alt='imagen noticia' />
            </div>
            <Footer />
        </div>
    );
}

export default DetalleNoticia;
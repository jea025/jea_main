import './Contacto.css';
import React, { useRef } from 'react';
import Footer from '../Footer/Footer';
import Image from 'next/image';


/*
se usa userRef que es un Hook para tener siempre actualizado el estado del formulario
y acceder a sus datos

el error que da es que no tiene una key para la api, no esta configurado
*/
const Contacto = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
      };

    return (
      <div>
      <div className='contactoContainer'>
            <div className='formContainer'>
                <h2><span>|</span> CONTACTANOS</h2>
                <p>Conectate con nosotros y ayudanos a marcar la diferencia. Juntos podemos crear un futuro mejor para quienes más lo necesitan.</p>
                <form ref={form} onSubmit={sendEmail}>
                    <div className='bloqueUno'>
                        <div className='formSeccion'>
                            <label>NOMBRE</label>
                            <input className='inputForm' type="text" name="user_name" />
                        </div>
                        <div className='formSeccion'>
                            <label>EMAIL</label>
                            <input className='inputForm' type="email" name="user_email" />
                        </div>
                    </div>
                    <div className='formSeccionMensaje'>
                        <label>MENSAJE</label>
                        <textarea name="message" />
                    </div>
                    <input className='buttonForm' id='send' type="submit" value="ENVIAR" />
                </form>
            </div>
            <div className='infoContainer'>
                <a href='https://www.youtube.com/user/jenaccionmultimedial' target='_blank' rel="noreferrer" className='youtube'><Image src='/youtube.svg' alt='youtube' /></a>
                <a href='https://www.facebook.com/radio.jovenesenaccion' target='_blank' rel="noreferrer" className='facebook'><Image src='/facebook.svg' alt='facebook' /></a>
                <a href='https://www.instagram.com/jovenes.enaccion/' target='_blank' rel="noreferrer" className='instagram'><Image src='/instagram.svg' alt='instagram' /></a>
                <a href='wa.link/1d3xsn' target='_blank' rel="noreferrer" className='whatsapp'><Image src='/whatsapp.svg' alt='whatsapp' /></a>
            </div>
    </div>
    <Footer />
    </div>
    )
}

export default Contacto;
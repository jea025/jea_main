import './NoticiasVacias.css';

//cuando la cartegoria esta vacia , renderiza mensajes de error
const NoticiasVacias = () => {
    return (
        <div className='noticiasVaciasContainer'>
            <span>Ups! Estamos Actualizando el sitio y ésta sección.</span>
            <br />
            Sepa disculpar las molestias ocasionadas.
        </div>
    )
}

export default NoticiasVacias;
import Image from 'next/image';
import './Carrusel.css';
import Slider from "react-slick";
import car1 from "../../public/car1.png"
import car2 from "../../public/car2.png"
import car3 from "../../public/car3.png"
/*carrusel es una libreria , no contiene logica*/
const Carrusel = () => {
    var settings = {
      dots: false,
      infinite: true,
      speed: 3000,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      swipe: false,
      autoplaySpeed: 6000,
      fade: true,
    };

    return (
        <Slider {...settings}>
          <div className='slideContainer'>
            <div className='slideContent'>
              <p>Programa</p>
              <h2>MULTIMEDIAL, EDUCATIVO<br/> Y SOCIAL</h2>
            </div>
            <Image src={car1} alt='image1' />
          </div>
          <div className='slideContainer'>
            <div className='slideContent'>
              <p>Radio en vivo</p>
              <h2>FM 97.9 Mhz<br/>Los Jueves de 20 a 21 hs</h2>
            </div>
            <Image src={car2} alt='image2' />
          </div>
          <div className='slideContainer'>
            <div className='slideContent'>
              <p>Impulsando la</p>
              <h2>REFLEXIÓN</h2>
            </div>
            <Image src={car3} alt='image3' />
          </div>
        </Slider>
    );
}

export default Carrusel;
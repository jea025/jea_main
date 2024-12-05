import './Carrusel.css';
import Image, { StaticImageData } from "next/image";

interface propsCarrousel {
    img: StaticImageData;
}

export default function ExampleCarouselImage({img}: propsCarrousel) {
    return(
        <div className='slideContainer'>
            <div className='slideContent'>
            </div>
            <Image src={img} alt='image' width={1920} height={869}/>
          </div>
    )
}
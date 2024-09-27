import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Imagen1 from '../assets/imagen1.jpg'; // Importa la imagen 1
import Imagen2 from '../assets/imagen2.jpg'; // Importa la imagen 2
import Imagen3 from '../assets/imagen3.jpg'; // Importa la imagen 3
import Imagen4 from '../assets/imagen4.jpg'; // Importa la imagen 4
import Imagen5 from '../assets/imagen5.jpg'; // Importa la imagen 5
import Imagen6 from '../assets/imagen6.jpg'; // Importa la imagen 6

const CarruselSobreNosotros: React.FC = () => {
  // Configuración del carrusel
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2, // Mostrar 2 imágenes a la vez
    slidesToScroll: 2, // Desplazar de 2 en 2
    autoplay: true, // Activar autoplay
    autoplaySpeed: 3000, // Velocidad de autoplay (3 segundos)
    rtl: true, // Desplazamiento de derecha a izquierda
    arrows: true, // Mostrar flechas de navegación
  };

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        <div>
          <img src={Imagen1} alt="Imagen 1" className="w-full h-auto rounded-lg shadow-lg" />
        </div>
        <div>
          <img src={Imagen2} alt="Imagen 2" className="w-full h-auto rounded-lg shadow-lg" />
        </div>
        <div>
          <img src={Imagen3} alt="Imagen 3" className="w-full h-auto rounded-lg shadow-lg" />
        </div>
        <div>
          <img src={Imagen4} alt="Imagen 4" className="w-full h-auto rounded-lg shadow-lg" />
        </div>
        <div>
          <img src={Imagen5} alt="Imagen 5" className="w-full h-auto rounded-lg shadow-lg" />
        </div>
        <div>
          <img src={Imagen6} alt="Imagen 6" className="w-full h-auto rounded-lg shadow-lg" />
        </div>
      </Slider>
    </div>
  );
};

export default CarruselSobreNosotros;

import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import ViajeEnGlobo from '../assets/ViajeEnGlobo.webp'; // Importa la imagen 1
import Surfear from '../assets/Surfear.avif'; // Importa la imagen 2
import Esnorquel from '../assets/Esnorquel.jpg'; // Importa la imagen 3
import ArcoLosCabos from '../assets/ArcoLosCabos.jpeg'; // Importa la imagen 4
import TuburioCarrusel from '../assets/TuburioCarrusel.jpg'; // Importa la imagen 5
import RestauranteCarrusel from '../assets/RestauranteCarrusel.jpg'; // Importa la imagen 6

const CarruselImagenes: React.FC = () => {
  // Configuraciones del carrusel
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Mostrar 3 imágenes a la vez
    slidesToScroll: 3, // Desplazarse de 3 en 3
    autoplay: true, // Activar autoplay si lo deseas
    autoplaySpeed: 3000, // Velocidad del autoplay (3 segundos)
    arrows: true, // Muestra flechas de navegación
    prevArrow: <SamplePrevArrow />, // Personaliza la flecha previa
    nextArrow: <SampleNextArrow />, // Personaliza la flecha siguiente
  };

  return (
    <div className="carousel-container bg-blue-500 p-10 mt-10"> {/* Fondo azul y padding */}
      <Slider {...settings} className="mx-auto max-w-6xl"> {/* Centramos el carrusel */}
        <div className="flex justify-center">
          <img 
            src={ViajeEnGlobo} 
            alt="Viaje en Globo" 
            className="w-350 h-550 object-cover rounded-lg shadow-lg" // Establecer el tamaño
            style={{ width: '350px', height: '550px' }} // Asegurar el tamaño fijo
          />
        </div>
        <div className="flex justify-center">
          <img 
            src={Surfear} 
            alt="Surfear" 
            className="w-350 h-550 object-cover rounded-lg shadow-lg" 
            style={{ width: '350px', height: '550px' }} 
          />
        </div>
        <div className="flex justify-center">
          <img 
            src={Esnorquel} 
            alt="Esnórquel" 
            className="w-350 h-550 object-cover rounded-lg shadow-lg" 
            style={{ width: '350px', height: '550px' }} 
          />
        </div>
        <div className="flex justify-center">
          <img 
            src={ArcoLosCabos} 
            alt="ArcoLosCabos" 
            className="w-350 h-550 object-cover rounded-lg shadow-lg" 
            style={{ width: '350px', height: '550px' }} 
          />
        </div>
        <div className="flex justify-center">
          <img 
            src={TuburioCarrusel} 
            alt="TuburioCarrusel" 
            className="w-350 h-550 object-cover rounded-lg shadow-lg" 
            style={{ width: '350px', height: '550px' }} 
          />
        </div>
        <div className="flex justify-center">
          <img 
            src={RestauranteCarrusel} 
            alt="RestauranteCarrusel" 
            className="w-350 h-550 object-cover rounded-lg shadow-lg" 
            style={{ width: '350px', height: '550px' }} 
          />
        </div>
      </Slider>
    </div>
  );
};

// Funciones para personalizar las flechas
const SamplePrevArrow = (props: any) => {
  const { className, style, onClick } = props;
  return (
    <div 
      className={className}
      style={{ 
        ...style, 
        display: 'block', 
        left: '-50px', // Ajusta la posición de la flecha izquierda
        zIndex: 1,
      }} 
      onClick={onClick}
    />
  );
};

const SampleNextArrow = (props: any) => {
  const { className, style, onClick } = props;
  return (
    <div 
      className={className}
      style={{ 
        ...style, 
        display: 'block', 
        right: '-50px', // Ajusta la posición de la flecha derecha
        zIndex: 1,
      }} 
      onClick={onClick}
    />
  );
};

export default CarruselImagenes;

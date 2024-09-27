import React, { useContext } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import ViajeEnGlobo from '../assets/ViajeEnGlobo.webp'; 
import Surfear from '../assets/Surfear.avif'; 
import Esnorquel from '../assets/Esnorquel.jpg'; 
import ArcoLosCabos from '../assets/ArcoLosCabos.jpeg'; 
import TuburioCarrusel from '../assets/TuburioCarrusel.jpg'; 
import RestauranteCarrusel from '../assets/RestauranteCarrusel.jpg'; 
import { LanguageContext } from '../context/LanguageContext'; // Importar el contexto de idioma

const CarruselImagenes: React.FC = () => {
  const { language } = useContext(LanguageContext); // Acceder al idioma actual

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    prevArrow: <SamplePrevArrow />,
    nextArrow: <SampleNextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  // Descripciones en español e inglés
  const imagesWithText = [
    {
      img: ViajeEnGlobo,
      desc_es: 'Viaje en Globo',
      desc_en: 'Hot Air Balloon Ride',
    },
    {
      img: Surfear,
      desc_es: 'Surf en Cabo',
      desc_en: 'Surfing in Cabo',
    },
    {
      img: Esnorquel,
      desc_es: 'Esnórquel en las aguas cristalinas',
      desc_en: 'Snorkeling in crystal clear waters',
    },
    {
      img: ArcoLosCabos,
      desc_es: 'El Arco de Los Cabos',
      desc_en: 'The Arch of Los Cabos',
    },
    {
      img: TuburioCarrusel,
      desc_es: 'Descubre La Vida Nocturna',
      desc_en: 'Discover the Nightlife',
    },
    {
      img: RestauranteCarrusel,
      desc_es: 'Disfruta en nuestros restaurantes',
      desc_en: 'Enjoy our restaurants',
    },
  ];

  return (
    <div className="carousel-container bg-blue-500 p-10 mt-10">
      <h2 className="text-center text-white text-4xl font-bold mb-8">
        {language === 'es' ? 'Actividades para hacer en Cabo' : 'Activities to do in Cabo'}
      </h2>

      <Slider {...settings} className="mx-auto max-w-6xl">
        {imagesWithText.map((item, index) => (
          <div key={index} className="relative flex justify-center items-center h-[500px]">
            <img 
              src={item.img} 
              alt={language === 'es' ? item.desc_es : item.desc_en} 
              className="w-full h-full object-cover rounded-lg shadow-lg" 
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-lg">
              <h3 className="text-white text-xl md:text-2xl font-bold text-center">
                {language === 'es' ? item.desc_es : item.desc_en}
              </h3>
            </div>
          </div>
        ))}
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
        left: '-50px',
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
        right: '-50px',
        zIndex: 1,
      }} 
      onClick={onClick}
    />
  );
};

export default CarruselImagenes;

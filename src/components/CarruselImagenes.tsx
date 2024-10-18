import React, { useContext } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Esnorquel from '../assets/Esnorquel.jpg';
import ArcoLosCabos from '../assets/ArcoLosCabos.jpeg';
import TuburioCarrusel from '../assets/TuburioCarrusel.jpg';
import RestauranteCarrusel from '../assets/RestauranteCarrusel.jpg';
import Racers from '../assets/Racers.jpg';
import Camellos from '../assets/Camellos.jpg';
import Delfines from '../assets/Delfines.jpg';
import Surfear from '../assets/Surfear.jpg';

import { LanguageContext } from '../context/LanguageContext';

const CarruselImagenes: React.FC = () => {
  const { language } = useContext(LanguageContext);

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
      { breakpoint: 1024, settings: { slidesToShow: 3, slidesToScroll: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2, slidesToScroll: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    ],
  };

  const imagesWithText = [
    { img: Surfear, desc_es: 'Surf en Cabo', desc_en: 'Surfing in Cabo' },
    { img: Esnorquel, desc_es: 'Esnórquel en aguas cristalinas', desc_en: 'Snorkeling in crystal clear waters' },
    { img: ArcoLosCabos, desc_es: 'El Arco de Los Cabos', desc_en: 'The Arch of Los Cabos' },
    { img: TuburioCarrusel, desc_es: 'Descubre la vida nocturna', desc_en: 'Discover the Nightlife' },
    { img: RestauranteCarrusel, desc_es: 'Disfruta en nuestros restaurantes', desc_en: 'Enjoy our restaurants' },
    { img: Racers, desc_es: 'Carreras en el desierto', desc_en: 'Desert Racing' },
    { img: Camellos, desc_es: 'Paseo en camello', desc_en: 'Camel Ride' },
    { img: Delfines, desc_es: 'Nado con delfines', desc_en: 'Swimming with Dolphins' },
  ];

  return (
    <div className="carousel-container bg-blue-500 p-10 mt-10">
      <h2 className="text-center text-white text-4xl font-bold mb-8">
        {language === 'es' ? 'Actividades para hacer en Cabo' : 'Activities to do in Cabo'}
      </h2>

      <Slider {...settings} className="mx-auto max-w-6xl">
        {imagesWithText.map((item, index) => (
          <div
            key={index}
            className="relative flex justify-center items-center w-full h-[250px] overflow-hidden"
          >
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

const SamplePrevArrow = (props: any) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', left: '-50px', zIndex: 1 }}
      onClick={onClick}
    />
  );
};

const SampleNextArrow = (props: any) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', right: '-50px', zIndex: 1 }}
      onClick={onClick}
    />
  );
};

export default CarruselImagenes;

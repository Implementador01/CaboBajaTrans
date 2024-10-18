import React, { useContext } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Imagen1 from '../assets/imagen1.jpg'; 
import Imagen2 from '../assets/imagen2.jpg'; 
import Imagen3 from '../assets/imagen3.jpg'; 
import Imagen4 from '../assets/imagen4.jpg'; 
import Imagen5 from '../assets/imagen5.jpg'; 
import Imagen6 from '../assets/imagen6.jpg'; 
import { LanguageContext } from '../context/LanguageContext'; // Importar el contexto de idioma

const CarruselSobreNosotros: React.FC = () => {
  const { language } = useContext(LanguageContext); // Acceder al contexto de idioma

  // Configuración del carrusel
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2, 
    slidesToScroll: 2, 
    autoplay: true, 
    autoplaySpeed: 3000, 
    rtl: true, 
    arrows: true,
  };

  // Definir las reseñas en base al idioma
  const reviews = language === 'es' ? [
    { comentario: "¡Una experiencia inolvidable! El servicio fue impecable y el viaje muy cómodo. Definitivamente lo recomendaré.", cliente: "Juan Pérez" },
    { comentario: "El conductor fue muy amable y profesional. Todo salió perfecto, disfrutamos mucho nuestro viaje en Cabo.", cliente: "María Rodríguez" },
    { comentario: "¡El mejor servicio de transporte en Los Cabos! Puntuales, con vehículos cómodos y un servicio al cliente excelente.", cliente: "Carlos Martínez" },
    { comentario: "Muy buen servicio. Fueron puntuales y los vehículos están en excelente estado. Nos sentimos muy seguros.", cliente: "Ana González" },
    { comentario: "Excelente atención desde el primer contacto. El chofer fue muy amable y nos ayudó con nuestras maletas.", cliente: "Pedro Sánchez" },
    { comentario: "Recomiendo este servicio al 100%. Nos hicieron sentir cómodos y seguros durante todo el trayecto.", cliente: "Laura Ramírez" }
  ] : [
    { comentario: "An really unforgettable experience! The service was impeccable and the trip very comfortable. I will definitely recommend it.", cliente: "John Perez" },
    { comentario: "The driver was very friendly and professional. Everything went perfect, we enjoyed our trip in Cabo.", cliente: "Maria Rodriguez" },
    { comentario: "The best transportation service in Los Cabos! Punctual, with comfortable vehicles and excellent customer service.", cliente: "Charles Martinez" },
    { comentario: "Great service. They were punctual and the vehicles are in excellent condition. We felt very safe.", cliente: "Anna Gonzalez" },
    { comentario: "Excellent attention from the first contact. The driver was very kind and helped us with our luggage.", cliente: "Peter Sanchez" },
    { comentario: "I highly recommend this service. They made us feel comfortable and safe throughout the entire trip.", cliente: "Laura Ramirez" }
  ];

  return (
    <div className="carousel-container">
      {/* Título "Experiencias" centrado */}
      <h2 className="text-center text-4xl font-bold text-blue-900 mb-8">
        {language === 'es' ? 'Experiencias' : 'Experiences'}
      </h2>

      <div className="max-w-5xl mx-auto px-10">
        <Slider {...settings}>
          {[Imagen1, Imagen2, Imagen3, Imagen4, Imagen5, Imagen6].map((imagen, index) => (
            <div key={index} className="flex justify-center">
              <img 
                src={imagen} 
                alt={`Imagen ${index + 1}`} 
                className="w-full h-[400px] object-cover rounded-lg shadow-lg" 
                style={{ width: '500px', height: '400px' }}
              />
            </div>
          ))}
        </Slider>
      </div>

      {/* Sección de reseñas */}
      <div className="bg-gray-100 py-12 mt-12">
        <h2 className="text-center text-3xl font-bold text-blue-900 mb-8">
          {language === 'es' ? 'Reseñas de Nuestros Clientes' : 'Customer Reviews'}
        </h2>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
          {reviews.map((review, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
              <p className="text-gray-700 mb-4">
                "{review.comentario}"
              </p>
              <p className="text-right font-bold">- {review.cliente}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CarruselSobreNosotros;

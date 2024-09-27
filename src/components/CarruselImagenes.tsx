import React, { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext'; // Importar el contexto de idioma

const Reseñas: React.FC = () => {
  const { language } = useContext(LanguageContext); // Acceder al idioma actual del contexto

  const reviewsData = [
    {
      cliente: 'Juan Pérez',
      reseña_es: 'Tuve una experiencia increíble con Cabo Baja Trans. Puntualidad y comodidad en todo momento.',
      reseña_en: 'I had an amazing experience with Cabo Baja Trans. Punctuality and comfort all the time.',
    },
    {
      cliente: 'Maria López',
      reseña_es: 'El conductor fue muy amable y el viaje fue muy agradable. Lo recomiendo totalmente.',
      reseña_en: 'The driver was very kind and the trip was very pleasant. I totally recommend it.',
    },
    {
      cliente: 'Carlos García',
      reseña_es: 'La mejor experiencia de transporte en Los Cabos. ¡Sin duda volveré a usar sus servicios!',
      reseña_en: 'The best transportation experience in Los Cabos. I will definitely use their services again!',
    },
    {
      cliente: 'Ana Torres',
      reseña_es: 'Excelente servicio, muy profesionales y atentos. Los vehículos estaban en perfectas condiciones.',
      reseña_en: 'Excellent service, very professional and attentive. The vehicles were in perfect condition.',
    },
    {
      cliente: 'Luis Sánchez',
      reseña_es: 'El viaje fue cómodo y seguro. Me sentí muy bien atendido en todo momento.',
      reseña_en: 'The trip was comfortable and safe. I felt very well cared for at all times.',
    },
    {
      cliente: 'Sofia Fernández',
      reseña_es: 'La mejor opción de transporte en Baja California. Gran calidad y atención.',
      reseña_en: 'The best transportation option in Baja California. Great quality and service.',
    },
  ];

  return (
    <div className="max-w-6xl mx-auto mt-10 p-8">
      <h2 className="text-3xl font-bold text-center text-blue-800 mb-8">
        {language === 'es' ? 'Experiencias' : 'Experiences'}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {reviewsData.map((review, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-lg font-bold mb-2 text-center">{review.cliente}</h3>
            <p className="text-gray-700 text-center">
              {language === 'es' ? review.reseña_es : review.reseña_en}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reseñas;

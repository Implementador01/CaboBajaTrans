import React, { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext'; // Importar el contexto de idioma
import FondoSN from '../assets/FondoSN.jpg'; // Importar la imagen de fondo
import CarruselSobreNosotros from '../components/CarruselSobreNosotros'; // Importar el carrusel

const SobreNosotros: React.FC = () => {
  const { language } = useContext(LanguageContext); // Acceder al idioma actual del contexto

  return (
    <div>
      {/* Contenedor para la descripción con imagen de fondo */}
      <div 
        className="bg-cover bg-center py-16" 
        style={{ backgroundImage: `url(${FondoSN})` }}
      >
        <div className="bg-black bg-opacity-50 p-8 text-center max-w-4xl mx-auto rounded-lg">
          <h1 className="text-4xl font-bold text-white mb-4">
            {language === 'es' ? 'Sobre Nosotros' : 'About Us'}
          </h1>
          <p className="text-white text-lg">
            {language === 'es' 
              ? 'Cabo Baja Trans es una empresa dedicada al transporte en Baja California, ofreciendo servicios de calidad y comodidad para nuestros clientes. Nuestra misión es hacer que cada viaje sea una experiencia inolvidable con vehículos seguros y confortables.'
              : 'Cabo Baja Trans is a company dedicated to transportation in Baja California, offering quality and comfortable services to our clients. Our mission is to make every trip an unforgettable experience with safe and comfortable vehicles.'}
          </p>
        </div>
      </div>

      {/* Carrusel de imágenes debajo de la descripción */}
      <div className="max-w-6xl mx-auto mt-10">
        <CarruselSobreNosotros /> {/* Carrusel de imágenes */}
      </div>
    </div>
  );
};

export default SobreNosotros;

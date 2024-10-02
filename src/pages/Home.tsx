import React, { useContext, useRef } from 'react';
import FormularioReserva from '../components/FormularioReserva';
import CarruselImagenes from '../components/CarruselImagenes'; // Importar el carrusel
import { LanguageContext } from '../context/LanguageContext'; // Importar el contexto de idioma
import FondoAventuras from '../assets/Fondo-Aventuras.jpeg'; // Importa la imagen de fondo
import DescuentoImage from '../assets/Descuento.png'; // Importa la imagen del cupón de descuento

const Home: React.FC = () => {
  const { language } = useContext(LanguageContext); // Acceder al idioma actual del contexto

  // Crear referencia para el formulario
  const formularioRef = useRef<HTMLDivElement>(null);

  // Función para hacer scroll al formulario
  const scrollToForm = () => {
    formularioRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      {/* Sección del formulario con fondo */}
      <div 
        className="min-h-screen bg-cover bg-center" 
        style={{ backgroundImage: `url(${FondoAventuras})` }} // Aplica la imagen de fondo solo para el formulario
      >
        <div className="bg-black bg-opacity-50 min-h-screen"> {/* Capa semitransparente */}
          <div className="max-w-4xl mx-auto p-8" ref={formularioRef}> {/* Añadir la referencia al formulario */}
            <h1 className="text-4xl font-bold text-white text-center mb-8">
              {language === 'es' ? '¡Reserva tu próxima aventura!' : 'Book your next adventure!'}
            </h1>
            <FormularioReserva /> {/* Formulario que se mostrará en la página principal */}
          </div>
        </div>
      </div>

      {/* Sección sin fondo con la imagen tipo cupón y las cinco columnas */}
      <div className="max-w-7xl mx-auto mt-10 grid grid-cols-1 md:grid-cols-2 gap-8 bg-white"> {/* Aumentamos el ancho del contenedor */}
        {/* Columna izquierda con la imagen ilustrativa */}
        <div>
          <img 
            src={DescuentoImage} // Usa la ruta de la imagen de descuento
            alt="Cupón de descuento" 
            className="w-full h-auto rounded-lg shadow-lg" 
          />
        </div>

        {/* Columna derecha con las cinco columnas de precios */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 text-align-center"> {/* Aumentamos el espaciado */}
          {[
            { zone: 'ZONE 1', destination: language === 'es' ? 'SAN JOSÉ DEL CABO' : 'SAN JOSE DEL CABO', price: 155 },
            { zone: 'ZONE 2', destination: language === 'es' ? 'CORREDOR' : 'CORRIDOR', price: 175 },
            { zone: 'ZONE 3', destination: language === 'es' ? 'CABO SAN LUCAS' : 'CABO SAN LUCAS', price: 180 },
            { zone: 'ZONE 4', destination: language === 'es' ? 'LADO PACÍFICO' : 'PACIFIC SIDE', price: 190 },
            { zone: 'ZONE 5', destination: language === 'es' ? 'NORTE PACÍFICO' : 'PACIFIC NORTH', price: 215 }
          ].map((item, index) => (
            <div 
              key={index} 
              className="flex flex-col justify-center items-center p-4 border rounded-lg shadow-lg text-center h-full"
            >
              <h3 className="text-lg font-bold">{item.zone}</h3>
              <p className="text-gray-500 text-sm">{language === 'es' ? 'DEL AEROPUERTO (SJD) A' : 'AIRPORT (SJD) TO'}</p>
              <p className="font-semibold text-gray-700">{item.destination}</p>
              <p className="mt-2 text-xl font-bold">${item.price} USD</p>
              <p className="text-gray-500">{language === 'es' ? 'VIAJE REDONDO' : 'ROUND TRIP'}</p>
              <div className="flex-grow"></div> {/* Espaciador flexible */}
              <button 
                className="mt-4 bg-blue-600 text-white py-3 px-4 rounded w-full hover:bg-blue-700 self-end min-h-[50px] text-xs font-bold leading-none flex items-center justify-center" // Ajustes del botón
                onClick={scrollToForm} // Al hacer clic, se desplaza hasta el formulario
              >
                {language === 'es' ? 'RESERVAR AHORA' : 'BOOK NOW'}
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Carrusel de imágenes */}
      <CarruselImagenes /> {/* Inserta el carrusel de imágenes aquí */}
    </div>
  );
};

export default Home;

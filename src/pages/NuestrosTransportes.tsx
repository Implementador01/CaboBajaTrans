import React, { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext'; // Importar el contexto de idioma
import SuburbanNegra from '../assets/SuburbanNegra.jpg'; // Ejemplo de imagen del transporte
import SuburbanBlanca from '../assets/SuburbanBlanca.jpg'; // Ejemplo de imagen del transporte
import JackVan from '../assets/JackVan.jpg'; // Ejemplo de imagen del transporte
import FordEscape from '../assets/FordEscape.jpg'; // Ejemplo de imagen del transporte
import ZonasSeñaladas from '../components/ZonasSeñaladas'; // Importa el componente ZonasSeñaladas

const transportesData = [
  {
    nombre: 'Suburban Negra',
    capacidad: 5,
    imagen: SuburbanNegra,
    descripcion_es: 'La Suburban Negra es un vehículo de lujo ideal para grupos pequeños de hasta 5 personas.',
    descripcion_en: 'The Black Suburban is a luxury vehicle perfect for small groups of up to 5 people.',
  },
  {
    nombre: 'Suburban Blanca',
    capacidad: 5,
    imagen: SuburbanBlanca,
    descripcion_es: 'La Suburban Blanca es perfecta para viajes cómodos y seguros, con capacidad para 5 pasajeros.',
    descripcion_en: 'The White Suburban is ideal for comfortable and safe trips, with capacity for 5 passengers.',
  },
  {
    nombre: 'Camioneta Jack',
    capacidad: 10,
    imagen: JackVan,
    descripcion_es: 'La Camioneta Jack tiene una capacidad máxima de 10 pasajeros y es ideal para grupos grandes.',
    descripcion_en: 'The Jack Van has a maximum capacity of 10 passengers, making it perfect for large groups.',
  },
  {
    nombre: 'Ford Escape',
    capacidad: 5,
    imagen: FordEscape,
    descripcion_es: 'El Ford Escape es una opción versátil para grupos de hasta 5 personas.',
    descripcion_en: 'The Ford Escape is a versatile option for groups of up to 5 people.',
  },
];

const NuestrosTransportes: React.FC = () => {
  const { language } = useContext(LanguageContext); // Acceder al idioma actual del contexto

  return (
    <div className="max-w-6xl mx-auto p-8">
      <h1 className="text-4xl font-bold text-center mb-10">
        {language === 'es' ? 'Nuestros Transportes' : 'Our Transport'}
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {transportesData.map((transporte, index) => (
          <div key={index} className="border rounded-lg shadow-lg p-4">
            <img 
              src={transporte.imagen} 
              alt={transporte.nombre} 
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h2 className="text-2xl font-semibold mb-2 text-center">{transporte.nombre}</h2>
            <p className="text-gray-600 mb-4">
              {language === 'es' ? transporte.descripcion_es : transporte.descripcion_en}
            </p>
            <p className="text-center font-bold text-lg">
              {language === 'es' ? `Capacidad: ${transporte.capacidad} pasajeros` : `Capacity: ${transporte.capacidad} passengers`}
            </p>
          </div>
        ))}
      </div>

      {/* Agregar el componente ZonasSeñaladas debajo de los transportes */}
      <div className="mt-12">
        <ZonasSeñaladas />
      </div>
    </div>
  );
};

export default NuestrosTransportes;

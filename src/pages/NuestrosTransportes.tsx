import React, { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext'; // Importar el contexto de idioma
import Van from '../assets/Van.jpg'; // Ejemplo de imagen del transporte
import Escalade from '../assets/Escalade.jpg'; // Ejemplo de imagen del transporte
import JackVan from '../assets/JackVan.jpg'; // Ejemplo de imagen del transporte
import Sprinter from '../assets/Sprinter.jpg'; // Ejemplo de imagen del transporte
import Expedition from '../assets/Expedition.jpg'; // Ejemplo de imagen del transporte de la nueva camioneta
import ZonasSeñaladas from '../components/ZonasSeñaladas'; // Importa el componente ZonasSeñaladas

const transportesData = [
  {
    nombre: 'VAN - Toyota Hiase',
    capacidad: 11,
    imagen: Van,
    descripcion_es: 'La Van es un vehículo ideal para grupos pequeños de hasta 5 personas.',
    descripcion_en: 'The Van is a perfect vehicle for small groups of up to 5 people.',
  },
  {
    nombre: 'Escalade',
    capacidad: 5,
    imagen: Escalade,
    descripcion_es: 'La Escalade es perfecta para viajes cómodos y seguros, con capacidad para 5 pasajeros.',
    descripcion_en: 'The Escalade is ideal for comfortable and safe trips, with a capacity for 5 passengers.',
  },
  {
    nombre: 'JAC',
    capacidad: 14,
    imagen: JackVan,
    descripcion_es: 'La Camioneta Jack tiene una capacidad máxima de 14 pasajeros y es ideal para grupos grandes.',
    descripcion_en: 'The Jack Van has a maximum capacity of 14 passengers, making it perfect for large groups.',
  },
  {
    nombre: 'Sprinter',
    capacidad: 19,
    imagen: Sprinter,
    descripcion_es: 'La Sprinter es una opción versátil para grupos de hasta 19 personas.',
    descripcion_en: 'The Sprinter is a versatile option for groups of up to 19 people.',
  },
  {
    nombre: 'Ford Expedition',
    capacidad: 5,
    imagen: Expedition, // Asegúrate de tener la imagen en la ruta correcta
    descripcion_es: 'La Ford Expedition es ideal para grupos medianos, con capacidad para 5 pasajeros y amplio espacio.',
    descripcion_en: 'The Ford Expedition is perfect for medium-sized groups, with capacity for 5 passengers and ample space.',
  },
];

const NuestrosTransportes: React.FC = () => {
  const { language } = useContext(LanguageContext); // Acceder al idioma actual del contexto

  return (
    <div className="max-w-6xl mx-auto p-8">
      <h1 className="text-4xl font-bold text-center mb-10">
        {language === 'es' ? 'Nuestros Transportes' : 'Our Transport'}
      </h1>

      {/* Grid para distribuir en filas de 3 y 2 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {transportesData.slice(0, 3).map((transporte, index) => (
          <div key={index} className="border rounded-lg shadow-lg p-4">
            <img 
              src={transporte.imagen} 
              alt={transporte.nombre} 
              className="w-full h-48 object-contain rounded-lg mb-4" // Cambié object-cover por object-contain
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

      {/* Segunda fila con solo 2 elementos */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 mt-8">
        {transportesData.slice(3).map((transporte, index) => (
          <div key={index} className="border rounded-lg shadow-lg p-4">
            <img 
              src={transporte.imagen} 
              alt={transporte.nombre} 
              className="w-full h-48 object-contain rounded-lg mb-4" // Cambié object-cover por object-contain
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

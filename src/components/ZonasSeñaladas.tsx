import React from 'react';
import ZonasImage from '../assets/ZonasSeñaladas.jpg'; // Imagen del mapa

const ZonasSeñaladas: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto p-8">
      {/* Título */}
      <h1 className="text-4xl font-bold text-center mb-8">Transportes Baja California</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Columna de texto con la descripción de las zonas */}
        <div>
          <h2 className="text-2xl font-bold mb-4">All Destinations</h2>
          <ul className="text-lg leading-loose">
            <li className="text-red-500">Todos Santos</li>
            <li className="text-purple-500">La Paz</li>
            <li className="text-orange-500">East Cape</li>
            <li className="text-gray-700">Los Cabos Airport</li>
            <hr className="my-4"/>
            <li className="text-blue-500">Zone 1 - San José del Cabo</li>
            <li className="text-green-500">Zone 2 - Corridor</li>
            <li className="text-orange-500">Zone 3 - Cabo San Lucas</li>
            <li className="text-blue-700">Zone 4 - Pacific Side</li>
          </ul>
        </div>

        {/* Columna de la imagen */}
        <div className="flex justify-center">
          <img 
            src={ZonasImage} 
            alt="Mapa de zonas" 
            className="w-full max-w-md h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default ZonasSeñaladas;

import React from 'react';

// Importar las imágenes de las camionetas
import Van from '../assets/Van.jpg';
import Escalade from '../assets/Escalade.jpg';
import JackVan from '../assets/JackVan.jpg';
import Sprinter from '../assets/Sprinter.jpg';

interface ResumenOrdenProps {
  total: number;
  servicios: any;
  camionetaSeleccionada: string;
  origen: string;
  destino: string;
  pasajeros: number;
  fecha: string;
  servicio: string;
}

// Mapeo de imágenes basado en la camioneta seleccionada
const camionetaImagenes: { [key: string]: string } = {
  "SUV (1-5 PAX)": Van,
  "VAN 1-10": Van,
  "ESCALADE 1-5": Escalade,
  "JAC 1-14": JackVan,
  "SPRINTER 1-19": Sprinter,
};

const ResumenOrden: React.FC<ResumenOrdenProps> = ({
  total,
  servicios,
  camionetaSeleccionada,
  origen,
  destino,
  pasajeros,
  fecha,
  servicio
}) => {
  // Obtener la imagen de la camioneta seleccionada
  const camionetaImagen = camionetaImagenes[camionetaSeleccionada] || null;

  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-md">
      <h3 className="text-lg font-bold mb-4">Resumen de la Orden</h3>

      {/* Contenedor en dos columnas */}
      <div className="grid grid-cols-2 gap-4">
        {/* Columna izquierda - Información del Formulario de Reserva */}
        <div>
          <h4 className="text-md font-bold mb-2">Información del Formulario de Reserva</h4>
          <p><strong>Tipo de Servicio:</strong> {servicio}</p>
          <p><strong>Fecha:</strong> {fecha}</p>
          <p><strong>Desde:</strong> {origen}</p>
          <p><strong>Hasta:</strong> {destino}</p>
          <p><strong>Pasajeros:</strong> {pasajeros}</p>
          <p><strong>Vehículo Seleccionado:</strong> {camionetaSeleccionada}</p>
        </div>

        {/* Columna derecha - Servicios Opcionales */}
        <div>
          <h4 className="text-md font-bold mb-2">Servicios Opcionales</h4>
          {Object.keys(servicios).map((key) => (
            <p key={key}><strong>{key}:</strong> {servicios[key]}</p>
          ))}
        </div>
      </div>

      <h3 className="text-xl font-bold mt-4">Total: ${total.toFixed(2)} USD</h3>

      {/* Mostrar la imagen de la camioneta seleccionada en la parte inferior */}
      {camionetaImagen && (
        <div className="mt-6">
          <img
            src={camionetaImagen}
            alt={camionetaSeleccionada || 'Camioneta seleccionada'}
            className="w-full h-48 object-contain rounded-lg"
          />
        </div>
      )}
    </div>
  );
};

export default ResumenOrden;

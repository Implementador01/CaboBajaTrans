import React from 'react';
import jsPDF from 'jspdf';

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
  mostrarBotonDescarga?: boolean;
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
  servicio,
  mostrarBotonDescarga = false,
}) => {
  // Obtener la imagen de la camioneta seleccionada
  const camionetaImagen = camionetaImagenes[camionetaSeleccionada] || null;

  // Función para generar el PDF
  const generarPDF = () => {
    const doc = new jsPDF();

    // Título
    doc.setFontSize(18);
    doc.text('Resumen de la Orden', 20, 20);

    // Información de la reserva
    doc.setFontSize(12);
    doc.text(`Tipo de Servicio: ${servicio}`, 20, 40);
    doc.text(`Fecha: ${fecha}`, 20, 50);
    doc.text(`Desde: ${origen}`, 20, 60);
    doc.text(`Hasta: ${destino}`, 20, 70);
    doc.text(`Pasajeros: ${pasajeros}`, 20, 80);
    doc.text(`Vehículo Seleccionado: ${camionetaSeleccionada}`, 20, 90);
    doc.text(`Total: $${total.toFixed(2)} USD`, 20, 100);

    // Generar la tabla de servicios opcionales manualmente
    const serviciosOpcionales = Object.keys(servicios).map(key => `${key}: ${servicios[key]}`);
    doc.setFontSize(14);
    doc.text('Servicios Opcionales:', 20, 110);
    if (serviciosOpcionales.length > 0) {
      serviciosOpcionales.forEach((servicio, index) => {
        doc.text(servicio, 20, 120 + index * 10);
      });
    } else {
      doc.text('Ninguno', 20, 120);
    }

    // Generar el PDF y descargar
    doc.save('ResumenOrden.pdf');
  };

  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-md">
      <h3 className="text-lg font-bold mb-4">Resumen de la Orden</h3>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <h4 className="text-md font-bold mb-2">Información del Formulario de Reserva</h4>
          <p><strong>Tipo de Servicio:</strong> {servicio}</p>
          <p><strong>Fecha:</strong> {fecha}</p>
          <p><strong>Desde:</strong> {origen}</p>
          <p><strong>Hasta:</strong> {destino}</p>
          <p><strong>Pasajeros:</strong> {pasajeros}</p>
          <p><strong>Vehículo Seleccionado:</strong> {camionetaSeleccionada}</p>
        </div>

        <div>
          <h4 className="text-md font-bold mb-2">Servicios Opcionales</h4>
          {Object.keys(servicios).map((key) => (
            <p key={key}><strong>{key}:</strong> {servicios[key]}</p>
          ))}
        </div>
      </div>

      <h3 className="text-xl font-bold mt-4">Total: ${total.toFixed(2)} USD</h3>

      {camionetaImagen && (
        <div className="mt-6">
          <img
            src={camionetaImagen}
            alt={camionetaSeleccionada || 'Camioneta seleccionada'}
            className="w-full h-48 object-contain rounded-lg"
          />
        </div>
      )}

      {/* Mostrar el botón de descarga si mostrarBotonDescarga es true */}
      {mostrarBotonDescarga && (
        <div className="mt-4">
          <button
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
            onClick={generarPDF}
          >
            Descargar Recibo (PDF)
          </button>
        </div>
      )}
    </div>
  );
};

export default ResumenOrden;

import React from 'react';
import jsPDF from 'jspdf';

interface ComprobantePDFProps {
  total: number;
  servicios: Record<string, number>;
  camionetaSeleccionada: string;
  origen: string;
  destino: string;
  pasajeros: number;
  fecha: string;
  servicio: string;
}

const ComprobantePDF: React.FC<ComprobantePDFProps> = ({
  total,
  servicios,
  camionetaSeleccionada,
  origen,
  destino,
  pasajeros,
  fecha,
  servicio
}) => {

  const generarPDF = () => {
    const doc = new jsPDF();

    // Título
    doc.setFontSize(18);
    doc.text('Comprobante de Pago', 20, 20);

    // Información del recibo
    doc.setFontSize(12);
    doc.text(`Tipo de Servicio: ${servicio}`, 20, 40);
    doc.text(`Fecha: ${fecha}`, 20, 50);
    doc.text(`Desde: ${origen}`, 20, 60);
    doc.text(`Hasta: ${destino}`, 20, 70);
    doc.text(`Pasajeros: ${pasajeros}`, 20, 80);
    doc.text(`Vehículo Seleccionado: ${camionetaSeleccionada}`, 20, 90);
    doc.text(`Total: $${total.toFixed(2)} USD`, 20, 100);

    // Listar servicios opcionales
    doc.text('Servicios Opcionales:', 20, 120);
    let startY = 130;

    if (Object.keys(servicios).length > 0) {
      Object.keys(servicios).forEach((key) => {
        doc.text(`${key}: ${servicios[key]}`, 20, startY);
        startY += 10; // Aumentar la posición vertical para cada servicio
      });
    } else {
      doc.text('Ninguno', 20, startY);
    }

    // Generar y descargar el PDF
    doc.save('ComprobantePago.pdf');
  };

  return (
    <div className="mt-6">
      <button
        onClick={generarPDF}
        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
      >
        Descargar Comprobante (PDF)
      </button>
    </div>
  );
};

export default ComprobantePDF;

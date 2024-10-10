import React from 'react';
import { useLocation } from 'react-router-dom';
import ResumenOrden from '../components/ResumenOrden';
import html2canvas from 'html2canvas';

const PantallaGracias: React.FC = () => {
  const location = useLocation();
  
  // Desestructuramos los datos que fueron pasados en el estado de la navegación
  const { total, servicios, camionetaSeleccionada, origen, destino, pasajeros, fecha, servicio } = location.state || {};

  // Función para generar el JPG a partir del resumen
  const generarJPG = () => {
    const resumenElement = document.getElementById('resumen-orden');
    if (resumenElement) {
      html2canvas(resumenElement).then((canvas) => {
        const link = document.createElement('a');
        link.download = 'resumen-orden.jpg';
        link.href = canvas.toDataURL('image/jpeg');
        link.click();
      });
    } else {
      console.error('Elemento del resumen no encontrado.');
    }
  };

  // Si no se pasan los datos de la orden, mostramos un mensaje de error
  if (!total || !camionetaSeleccionada || !origen || !destino) {
    return <p>No se encontraron los detalles de la orden.</p>;
  }

  return (
    <div className="container mx-auto my-8 p-6 bg-white shadow-md rounded">
      <h1 className="text-3xl font-bold mb-6 text-center">¡Gracias por tu compra!</h1>
      <p className="text-lg text-center mb-8">Tu pago ha sido procesado con éxito.</p>

      {/* Mostramos el componente ResumenOrden */}
      <div id="resumen-orden">
        <ResumenOrden
          total={total}
          servicios={servicios}
          camionetaSeleccionada={camionetaSeleccionada}
          origen={origen}
          destino={destino}
          pasajeros={pasajeros}
          fecha={fecha}
          servicio={servicio}
          mostrarBotonDescarga={false} // No mostramos el botón de descarga en ResumenOrden
        />
      </div>

      {/* Botón para descargar el JPG */}
      <div className="mt-8 flex justify-center">
        <button
          onClick={generarJPG}
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Descargar Resumen (JPG)
        </button>
      </div>
    </div>
  );
};

export default PantallaGracias;

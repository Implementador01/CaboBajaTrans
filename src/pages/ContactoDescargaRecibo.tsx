import React from 'react';
import { useLocation } from 'react-router-dom';
import ComprobantePDF from '../components/ComprobantePDF';

const ContactoDescargaRecibo: React.FC = () => {
  const location = useLocation();
  const { total, servicios, camionetaSeleccionada, origen, destino, pasajeros, fecha, servicio } = location.state;

  return (
    <div className="container mx-auto p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-3xl font-bold mb-6">Contacto y Descarga de Recibo</h1>

      {/* Aquí puedes agregar el formulario de contacto si lo necesitas */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Formulario de Contacto</h2>
        <form>
          {/* Campos del formulario */}
          <label className="block mb-2">Nombre</label>
          <input type="text" className="border p-2 w-full mb-4" />
          <label className="block mb-2">Correo Electrónico</label>
          <input type="email" className="border p-2 w-full mb-4" />
          <label className="block mb-2">Mensaje</label>
          <textarea className="border p-2 w-full mb-4"></textarea>

          <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Enviar</button>
        </form>
      </div>

      {/* Componente para descargar el recibo en PDF */}
      <ComprobantePDF
        total={total}
        servicios={servicios}
        camionetaSeleccionada={camionetaSeleccionada}
        origen={origen}
        destino={destino}
        pasajeros={pasajeros}
        fecha={fecha}
        servicio={servicio}
      />
    </div>
  );
};

export default ContactoDescargaRecibo;

import React, { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';
import { useNavigate, useLocation } from 'react-router-dom';
import StripeCheckout from '../components/StripeCheckout'; // Importamos el componente de Stripe
import ResumenOrden from '../components/ResumenOrden'; // Importamos el componente de Resumen de Orden
import axios from 'axios'; // Importamos axios para hacer solicitudes al servidor

const DetallesContacto: React.FC = () => {
  const { language } = useContext(LanguageContext);
  const navigate = useNavigate();
  const location = useLocation();

  // Tomamos los datos desde el estado pasado por el router
  const total = location.state?.total || 0;
  const servicios = location.state?.servicios || {};
  const camionetaSeleccionada = location.state?.camionetaSeleccionada || '';
  const origen = location.state?.origen || '';
  const destino = location.state?.destino || '';
  const pasajeros = location.state?.pasajeros || 0;
  const fecha = location.state?.fecha || '';
  const servicio = location.state?.servicio || '';

  // URL del formulario dependiendo del idioma
  const formUrl = language === 'es'
    ? 'https://api.leadconnectorhq.com/widget/form/9aZsb8WuR8UIJSxx3aqV'
    : 'https://api.leadconnectorhq.com/widget/form/FvgXEU9PWOvWEcEdaIWc';

  // Función para enviar los detalles de la reserva por correo al servidor
  const enviarDetallesPorCorreo = async () => {
    try {
      const response = await axios.post('http://localhost:5000/enviar-correo', {
        total,
        servicios,
        camionetaSeleccionada,
        origen,
        destino,
        pasajeros,
        fecha,
        servicio,
      });
      if (response.status === 200) {
        console.log('Correo enviado con éxito');
      }
    } catch (error) {
      console.error('Error al enviar el correo:', error);
    }
  };

  return (
    <div className="container mx-auto my-8 p-6 bg-white shadow-md rounded h-auto">
      {/* Barra de Progreso */}
      <div className="flex justify-around items-center mb-6">
        <div className="text-center">
          <span className={`text-${language === 'es' ? 'blue-500' : 'gray-400'} font-bold`}>1</span>
          <p>{language === 'es' ? 'Detalles del Servicio' : 'Service Details'}</p>
        </div>
        <div className="text-center">
          <span className="text-blue-500 font-bold">2</span>
          <p>{language === 'es' ? 'Resumen de la Reserva' : 'Reservation Summary'}</p>
        </div>
        <div className="text-center">
          <span className="text-blue-500 font-bold">3</span>
          <p>{language === 'es' ? 'Detalles de Contacto y Pago' : 'Contact and Payment Details'}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Incrustar el formulario desde el CRM */}
        <div className="w-full h-auto">
          <iframe
            src={formUrl}
            style={{
              width: '100%',
              height: '700px', // Aumentamos la altura para que no se corte
              border: 'none',
            }}
            title="Formulario de Contacto"
          ></iframe>
        </div>

        {/* Sección de Pago con Stripe */}
        <div className="w-full bg-white p-8 shadow-md rounded h-auto">
          <h2 className="text-lg font-bold mb-4">
            {language === 'es' ? 'Pago con Tarjeta' : 'Card Payment'}
          </h2>
          {/* Pasamos el total y la función enviarDetallesPorCorreo a StripeCheckout */}
          <StripeCheckout total={total} onPaymentSuccess={enviarDetallesPorCorreo} />
        </div>
      </div>

      {/* Resumen de la Orden */}
      <div className="mt-8">
        <h2 className="text-xl font-bold mb-4">{language === 'es' ? 'Resumen de la Orden' : 'Order Summary'}</h2>
        <ResumenOrden
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

      {/* Botón de regresar */}
      <div className="mt-4 flex justify-between">
        <button
          className="bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-600"
          onClick={() => navigate(-1)}
        >
          {language === 'es' ? 'Regresar' : 'Go Back'}
        </button>
      </div>
    </div>
  );
};

export default DetallesContacto;

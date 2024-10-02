import React, { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';
import { useNavigate } from 'react-router-dom';

const DetallesContacto: React.FC = () => {
  const { language } = useContext(LanguageContext);
  const navigate = useNavigate();

  const handleContinue = () => {
    navigate('/confirmacion'); // Cambia esta ruta a la correcta para la confirmación y pago
  };

  // URL del formulario dependiendo del idioma
  const formUrl = language === 'es'
    ? 'https://api.leadconnectorhq.com/widget/form/9aZsb8WuR8UIJSxx3aqV' // Formulario en español
    : 'https://api.leadconnectorhq.com/widget/form/FvgXEU9PWOvWEcEdaIWc'; // Formulario en inglés

  return (
    <div className="container mx-auto my-4 p-4 bg-white shadow-md rounded h-screen">
      {/* Barra de Progreso */}
      <div className="flex justify-around items-center mb-4">
        <div className="text-center">
          <span className="text-blue-500 font-bold">1</span>
          <p>{language === 'es' ? 'Detalles del Servicio' : 'Service Details'}</p>
        </div>
        <div className="text-center">
          <span className="text-blue-500 font-bold">2</span>
          <p>{language === 'es' ? 'Resumen de la Reserva' : 'Reservation Summary'}</p>
        </div>
        <div className="text-center">
          <span className="text-blue-500 font-bold">3</span>
          <p>{language === 'es' ? 'Detalles de Contacto' : 'Contact Details'}</p>
        </div>
        <div className="text-center">
          <span className="text-gray-400 font-bold">4</span>
          <p>{language === 'es' ? 'Confirmación y Pago' : 'Confirmation and Payment'}</p>
        </div>
      </div>

      {/* Incrustar el formulario desde el CRM */}
      <div className="flex-grow flex justify-center"> {/* Centrar el formulario */}
        <iframe
          src={formUrl}
          style={{
            width: '80%', // Ajustar el ancho del iframe
            height: 'calc(100vh - 220px)', // Ajustar la altura del iframe
            border: 'none',
          }}
          title="Formulario de Contacto"
        ></iframe>
      </div>

      {/* Botón de Continuar */}
      <div className="mt-2 flex justify-end"> {/* Ajustar el margen superior */}
        <button
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          onClick={handleContinue}
        >
          {language === 'es' ? 'Continuar' : 'Continue'}
        </button>
      </div>
    </div>
  );
};

export default DetallesContacto;

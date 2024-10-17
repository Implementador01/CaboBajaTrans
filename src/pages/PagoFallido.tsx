import React from 'react';
import { useNavigate } from 'react-router-dom';

const PagoFallido: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="container mx-auto my-8 p-6 bg-white shadow-md rounded">
      <h1 className="text-3xl font-bold mb-6 text-center text-red-600">¡El pago ha fallado!</h1>
      <p className="text-lg text-center mb-8">
        Lo sentimos, hubo un problema procesando tu pago. Por favor, inténtalo nuevamente.
      </p>
      <div className="mt-8 flex justify-center">
        <button
          onClick={() => navigate('/detalles-contacto')}
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Intentar de nuevo
        </button>
      </div>
    </div>
  );
};

export default PagoFallido;

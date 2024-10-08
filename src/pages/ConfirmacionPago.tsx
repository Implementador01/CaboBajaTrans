import React from 'react';
import { useLocation } from 'react-router-dom';

const ConfirmacionPago: React.FC = () => {
  const location = useLocation();
  const { servicios, total } = location.state || {};

  return (
    <div className="container mx-auto my-8 p-6 bg-white shadow-md rounded">
      <h1 className="text-2xl font-bold mb-4">Confirmación y Pago</h1>

      <p><strong>Servicios seleccionados:</strong> {JSON.stringify(servicios)}</p>
      <p><strong>Total a pagar:</strong> ${total?.toFixed(2)} USD</p>

      {/* Aquí puedes agregar la lógica para el proceso de pago, como integrar PayPal o Stripe */}
    </div>
  );
};

export default ConfirmacionPago;

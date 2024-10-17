import React, { useState, useContext } from 'react';
import { initMercadoPago, Wallet } from '@mercadopago/sdk-react';
import { LanguageContext } from '../context/LanguageContext';
import { FaCreditCard } from 'react-icons/fa'; // Ícono de tarjeta de crédito

// Inicializa Mercado Pago con la clave pública
initMercadoPago('TU_PUBLIC_KEY', { locale: 'es-MX' });

interface MpCheckoutProps {
  total: number;
}

const MpCheckout: React.FC<MpCheckoutProps> = ({ total }) => {
  const { language } = useContext(LanguageContext);
  const [preferenceId, setPreferenceId] = useState<string | null>(null);

  const createPreference = async () => {
    try {
      const response = await fetch('https://tu-backend-vercel.com/create-preference', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          items: [
            {
              title: 'Reserva de Camioneta',
              unit_price: total,
              quantity: 1,
            },
          ],
        }),
      });

      const data = await response.json();
      setPreferenceId(data.id); // Guardar el ID de la preferencia
    } catch (error) {
      console.error('Error al crear la preferencia:', error);
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-gray-100 rounded-lg shadow-lg">
      <div className="mb-6 text-center">
        <p className="text-2xl font-semibold">
          {language === 'es' ? 'Pago con Tarjeta' : 'Card Payment'}
        </p>
        <p className="text-xl font-bold mt-2">
          {language === 'es'
            ? `Total a pagar: $${total} MXN`
            : `Total to pay: $${total} MXN`}
        </p>
      </div>

      <button
        onClick={createPreference}
        className="flex items-center justify-center w-full px-6 py-3 text-white bg-gradient-to-r from-yellow-400 to-black hover:from-yellow-300 hover:to-gray-800 focus:outline-none focus:ring-4 focus:ring-yellow-200 rounded-lg transition-all duration-300"
      >
        <FaCreditCard className="mr-2 text-white" />
        {language === 'es' ? 'Pagar con Pago Seguro' : 'Pay with Safe Payment'}
      </button>

      {preferenceId && (
        <div className="mt-6">
          <Wallet initialization={{ preferenceId }} />
        </div>
      )}
    </div>
  );
};

export default MpCheckout;

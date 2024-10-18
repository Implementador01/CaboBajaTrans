import React, { useState, useContext } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { LanguageContext } from '../context/LanguageContext';
import { FaCreditCard } from 'react-icons/fa';

// Cargar la clave pública de Stripe (asegúrate de reemplazarla con la tuya)
const stripePromise = loadStripe('pk_live_51Q6G3D01kPYg7t5t6s4PEgtgHTtEEezeUVzlweRDVmQRbRfj5cJHm0DNtzdYyd8Z0IGDkGhJe9Nl6VG3DABQNdS300cPxdkXho');

interface StripeCheckoutProps {
  total: number; // Total en dólares
}

const StripeCheckout: React.FC<StripeCheckoutProps> = ({ total }) => {
  const { language } = useContext(LanguageContext);
  const [loading, setLoading] = useState(false);

  const handleCheckout = async () => {
    setLoading(true); // Cambia el estado a "cargando"
    const stripe = await stripePromise;

    try {
      // Hacer la solicitud al backend para crear la sesión de pago
      const response = await fetch('http://localhost:5001/create-checkout-session', {
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

      const { id } = await response.json(); // Extraer el session ID del backend

      // Redirigir al usuario al checkout de Stripe
      const { error } = await stripe!.redirectToCheckout({ sessionId: id });

      if (error) {
        console.error('Error en el redireccionamiento:', error);
      }
    } catch (error) {
      console.error('Error al crear la sesión de pago:', error);
    } finally {
      setLoading(false); // Restablece el estado
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
            ? `Total a pagar: $${total} USD`
            : `Total to pay: $${total} USD`}
        </p>
      </div>

      <button
        onClick={handleCheckout}
        disabled={loading}
        className="flex items-center justify-center w-full px-6 py-3 text-white bg-gradient-to-r from-yellow-400 to-black hover:from-yellow-300 hover:to-gray-800 focus:outline-none focus:ring-4 focus:ring-yellow-200 rounded-lg transition-all duration-300"
      >
        <FaCreditCard className="mr-2 text-white" />
        {loading
          ? language === 'es'
            ? 'Redirigiendo...'
            : 'Redirecting...'
          : language === 'es'
          ? 'Pagar con Stripe'
          : 'Pay with Stripe'}
      </button>
    </div>
  );
};

export default StripeCheckout;

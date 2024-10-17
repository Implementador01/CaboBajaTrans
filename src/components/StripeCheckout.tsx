import React, { useState, useContext } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Importamos para redirección
import { LanguageContext } from '../context/LanguageContext';

const stripePromise = loadStripe(
  'pk_live_51Q6G3D01kPYg7t5t6s4PEgtgHTtEEezeUVzlweRDVmQRbRfj5cJHm0DNtzdYyd8Z0IGDkGhJe9Nl6VG3DABQNdS300cPxdkXho'
); // Clave pública live

interface StripeCheckoutProps {
  total: number;
}

const StripeCheckout: React.FC<StripeCheckoutProps> = ({ total }) => {
  const { language } = useContext(LanguageContext);
  const [isProcessing, setIsProcessing] = useState(false);
  const navigate = useNavigate(); // Navegación para redirigir

  const handleClick = async () => {
    setIsProcessing(true);

    try {
      const backendUrl =
        process.env.NODE_ENV === 'production'
          ? 'https://tudominio.com' // Cambia por la URL real del backend en producción
          : 'http://localhost:5001';

      const response = await axios.post(`${backendUrl}/create-checkout-session`, {
        amount: total,
      });

      const sessionId = response.data.id;

      const stripe = await stripePromise;
      if (stripe) {
        const { error } = await stripe.redirectToCheckout({ sessionId });

        if (error) {
          console.error('Error en la redirección a Stripe:', error);
          navigate('/pago-fallido'); // Redirigir en caso de error
        }
      } else {
        console.error('Error al cargar Stripe.');
        navigate('/pago-fallido'); // Redirigir si Stripe no se cargó
      }
    } catch (error) {
      console.error('Error al crear la sesión de pago:', error);
      navigate('/pago-fallido'); // Redirigir si falla la creación de sesión
    }
  };

  return (
    <div className="max-w-lg mx-auto p-4 bg-gray-100 rounded">
      <div className="mb-4 text-center">
        <p className="text-lg font-bold">
          {language === 'es'
            ? `Total a pagar: $${total} USD`
            : `Total to pay: $${total} USD`}
        </p>
      </div>

      <button
        onClick={handleClick}
        disabled={isProcessing}
        className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
      >
        {isProcessing
          ? language === 'es' ? 'Procesando...' : 'Processing...'
          : language === 'es' ? 'Pagar' : 'Pay'}
      </button>
    </div>
  );
};

export default StripeCheckout;

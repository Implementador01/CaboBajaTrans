import React, { useState, useContext } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Para redirección
import { LanguageContext } from '../context/LanguageContext';

// Inicializa Stripe con la clave pública desde las variables de entorno de Vite
const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY!);

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
      // Detecta si estamos en producción o desarrollo y selecciona la URL correcta del backend
      const backendUrl =
        process.env.NODE_ENV === 'production'
          ? 'https://cabo-baja-trans.vercel.app' // URL del backend desplegado en Vercel
          : 'http://localhost:5001'; // URL local para desarrollo

      // Realiza la petición POST al backend para crear la sesión de Stripe
      const response = await axios.post(`${backendUrl}/create-checkout-session`, {
        amount: total, // Monto en centavos
      });

      const sessionId = response.data.id;

      // Carga Stripe y redirige al checkout con la sesión obtenida
      const stripe = await stripePromise;
      if (stripe) {
        const { error } = await stripe.redirectToCheckout({ sessionId });

        if (error) {
          console.error('Error en la redirección a Stripe:', error);
          navigate('/pago-fallido'); // Redirige en caso de error
        }
      } else {
        console.error('Error al cargar Stripe.');
        navigate('/pago-fallido'); // Redirige si no se cargó Stripe
      }
    } catch (error) {
      console.error('Error al crear la sesión de pago:', error);
      navigate('/pago-fallido'); // Redirige en caso de error en la creación de sesión
    } finally {
      setIsProcessing(false);
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

import React, { useState, useContext } from 'react';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { LanguageContext } from '../context/LanguageContext'; // Importamos el contexto de idioma

const stripePromise = loadStripe('TU_CLAVE_PUBLICA_STRIPE');

// Componente de formulario de pago
const CheckoutForm: React.FC<{ total: number, onPaymentSuccess: () => void }> = ({ total, onPaymentSuccess }) => {
  const { language } = useContext(LanguageContext); // Accedemos al contexto de idioma
  const stripe = useStripe();
  const elements = useElements();
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!stripe || !elements) return;

    setIsProcessing(true);
    setError(null);

    const cardElement = elements.getElement(CardElement);

    if (!cardElement) {
      setError(language === 'es' ? 'Tarjeta no válida' : 'Invalid card');
      setIsProcessing(false);
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });

    if (error) {
      console.error('Error en el pago:', error);
      setError(error.message || (language === 'es' ? 'Error en el pago' : 'Payment error'));
      setIsProcessing(false);
    } else {
      console.log('Método de pago exitoso:', paymentMethod);
      setPaymentSuccess(true);

      // Aquí llamamos la función para enviar el correo
      onPaymentSuccess(); // Llama a la función proporcionada para el envío del correo

      setIsProcessing(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-4 bg-gray-100 rounded">
      {paymentSuccess ? (
        <div className="text-green-500 text-center">
          {language === 'es' ? '¡Pago realizado con éxito! Gracias por tu compra.' : 'Payment successful! Thank you for your purchase.'}
        </div>
      ) : (
        <>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">{language === 'es' ? 'Detalles de la tarjeta' : 'Card Details'}</label>
            <CardElement className="p-2 border rounded" />
          </div>

          {error && (
            <div className="text-red-500 text-center mb-4">
              {error}
            </div>
          )}

          <div className="mb-4">
            <p className="text-lg font-bold">{language === 'es' ? `Total a pagar: $${total}` : `Total to pay: $${total}`}</p>
          </div>

          <button
            type="submit"
            disabled={!stripe || isProcessing}
            className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          >
            {isProcessing
              ? language === 'es'
                ? 'Procesando...'
                : 'Processing...'
              : language === 'es'
              ? 'Pagar'
              : 'Pay'}
          </button>
        </>
      )}
    </form>
  );
};

// Componente principal que envuelve el formulario de Stripe
const StripeCheckout: React.FC<{ total: number, onPaymentSuccess: () => void }> = ({ total, onPaymentSuccess }) => {
  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm total={total} onPaymentSuccess={onPaymentSuccess} />
    </Elements>
  );
};

export default StripeCheckout;

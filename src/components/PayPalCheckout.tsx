// src/components/PayPalCheckout.tsx
import React, { useState } from 'react';
import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";

const PayPalCheckout: React.FC = () => {
  const [paidFor, setPaidFor] = useState(false);
  const [error, setError] = useState("");

  // Puedes obtener el monto del total de la reserva
  const amount = "100.00"; // Monto de prueba en USD, cámbialo según el contexto de tu aplicación

  const handleApprove = (orderId: string) => {
    setPaidFor(true);
    alert(`Pago completado. ID de la orden: ${orderId}`);
    // Aquí puedes manejar la lógica después de que el pago haya sido aprobado
  };

  if (paidFor) {
    return <h1>Gracias por tu compra</h1>;
  }

  if (error) {
    return <h1>Hubo un error en el procesamiento del pago: {error}</h1>;
  }

  return (
    <PayPalScriptProvider options={{ "client-id": "TU_CLIENT_ID_PAYPAL" }}>
      <PayPalButtons
        style={{ layout: "vertical" }}
        createOrder={(data, actions) => {
          return actions.order.create({
            purchase_units: [
              {
                amount: {
                  value: amount, // Aquí va el monto total a cobrar
                },
              },
            ],
          });
        }}
        onApprove={async (data, actions) => {
          const order = await actions.order?.capture();
          handleApprove(order?.id || "");
        }}
        onError={(err) => {
          setError(err);
          console.error("Error en el pago con PayPal", err);
        }}
      />
    </PayPalScriptProvider>
  );
};

export default PayPalCheckout;

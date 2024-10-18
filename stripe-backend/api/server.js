require('dotenv').config(); // Carga las variables de entorno
const express = require('express');
const cors = require('cors');
const Stripe = require('stripe');

// Configura Stripe con la clave secreta
const stripe = Stripe(process.env.STRIPE_SECRET_KEY);

const app = express();
app.use(cors()); // Permitir solicitudes de otros orígenes
app.use(express.json()); // Analizar JSON

// Endpoint para crear una sesión de pago
app.post('/create-checkout-session', async (req, res) => {
  const { items } = req.body;

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: items.map((item) => ({
        price_data: {
          currency: 'usd',
          product_data: { name: item.title },
          unit_amount: item.unit_price * 100, // Convertir a centavos
        },
        quantity: item.quantity,
      })),
      mode: 'payment',
      success_url: 'http://localhost:3000/pantalla-gracias',
      cancel_url: 'http://localhost:3000/pago-fallido',
    });

    res.json({ id: session.id }); // Responder con el ID de la sesión
  } catch (error) {
    console.error('Error al crear la sesión de pago:', error);
    res.status(500).json({ error: error.message });
  }
});

// Iniciar el servidor en el puerto 5001
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Servidor corriendo en http://localhost:${PORT}`));

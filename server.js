const express = require('express');
const cors = require('cors');
require('dotenv').config(); // Carga las variables de entorno

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY); // Llave secreta desde .env

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Ruta de prueba para verificar que el servidor está activo
app.get('/test', (req, res) => {
  res.send('El servidor está funcionando correctamente');
});

// Endpoint POST para crear la sesión de pago
app.post('/create-checkout-session', async (req, res) => {
  const { amount } = req.body;

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [{
        price_data: {
          currency: 'usd',
          product_data: { name: 'Reserva de Camioneta' },
          unit_amount: amount * 100, // Stripe usa centavos
        },
        quantity: 1,
      }],
      mode: 'payment',
      success_url: 'https://transportadoracabo.com/gracias',
      cancel_url: 'https://transportadoracabo.com/pago-fallido',
    });

    res.json({ id: session.id });
  } catch (error) {
    console.error('Error creando sesión de pago:', error);
    res.status(500).json({ error: error.message });
  }
});

// Puerto dinámico asignado por Vercel
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}`));

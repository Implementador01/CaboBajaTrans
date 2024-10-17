const express = require('express');
const cors = require('cors');
require('dotenv').config(); // Importar dotenv para las variables de entorno
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY); // Usar la clave secreta desde el .env
const app = express();

app.use(cors());
app.use(express.json());

app.post('/create-checkout-session', async (req, res) => {
  const { amount } = req.body;

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [{
        price_data: {
          currency: 'usd',
          product_data: {
            name: 'Reserva de Camioneta',
          },
          unit_amount: amount * 100, // Stripe usa centavos
        },
        quantity: 1,
      }],
      mode: 'payment',
      success_url: 'https://transportadoracabo.com/gracias', // Redirige a la pantalla de agradecimiento
      cancel_url: 'https://transportadoracabo.com/pago-fallido', // Redirige a la pantalla de pago fallido
    });

    res.json({ id: session.id });
  } catch (error) {
    console.error('Error creando sesión de pago:', error);
    res.status(500).json({ error: error.message });
  }
});

const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}`));


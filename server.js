const express = require('express');
const cors = require('cors');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY); // Usar la clave secreta desde variables de entorno
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
      success_url: 'https://transportadoracabo.com/gracias',  // URL de éxito en Netlify
      cancel_url: 'https://transportadoracabo.com/cancelar',  // URL de cancelación en Netlify
    });

    res.json({ id: session.id });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(process.env.PORT || 5001, () => console.log(`Servidor corriendo en el puerto ${process.env.PORT || 5001}`));

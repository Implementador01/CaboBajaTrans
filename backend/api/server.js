const express = require('express');
const Stripe = require('stripe');
const cors = require('cors');
require('dotenv').config();

// Usa la clave secreta de Stripe y asegúrate de la versión correcta
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

const app = express();

app.use(cors());
app.use(express.json());

app.post('/create-checkout-session', async (req, res) => {
  const { items } = req.body;
  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: items.map((item) => ({
        price_data: {
          currency: 'usd',
          product_data: {
            name: item.title,
          },
          unit_amount: item.unit_price * 100, // Stripe espera el monto en centavos
        },
        quantity: item.quantity,
      })),
      mode: 'payment',
      success_url: 'http://localhost:3000/gracias',
      cancel_url: 'http://localhost:3000/pago-fallido',
    });

    res.status(200).json({ id: session.id });
  } catch (error) {
    console.error('Error al crear la sesión de pago:', error);
    res.status(500).json({ error: error.message });
  }
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

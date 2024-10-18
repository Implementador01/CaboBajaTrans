require('dotenv').config(); // Carga las variables de entorno
const express = require('express');
const cors = require('cors');
const Stripe = require('stripe');

// Usa la clave secreta desde el entorno
const stripe = Stripe(process.env.STRIPE_SECRET_KEY);

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
          unit_amount: item.unit_price * 100,
        },
        quantity: item.quantity,
      })),
      mode: 'payment',
      success_url: 'https://transportadoracabo.com/gracias',
      cancel_url: 'https://transportadoracabo.com/pago-fallido',
    });

    res.json({ id: session.id });
  } catch (error) {
    console.error('Error al crear la sesión de pago:', error);
    res.status(500).json({ error: error.message });
  }
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}`));

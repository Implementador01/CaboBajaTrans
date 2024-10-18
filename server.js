const express = require('express');
const cors = require('cors');
const mercadopago = require('mercadopago');

// Configura Mercado Pago con tu Access Token
mercadopago.configurations.setAccessToken('TU_ACCESS_TOKEN'); // Reemplaza con tu Access Token

const app = express();
app.use(cors());
app.use(express.json());

// Endpoint para crear la preferencia de pago
app.post('/create-preference', async (req, res) => {
  const preference = {
    items: req.body.items.map((item) => ({
      ...item,
      currency_id: 'USD', // Configura la moneda como dólares
    })),
    back_urls: {
      success: 'https://transportadoracabo.com/gracias',
      failure: 'https://transportadoracabo.com/pago-fallido',
      pending: 'https://transportadoracabo.com/pago-pendiente',
    },
    auto_return: 'approved', // Redirige automáticamente si el pago se aprueba
  };

  try {
    const response = await mercadopago.preferences.create(preference);
    res.json({ id: response.body.id });
  } catch (error) {
    console.error('Error al crear la preferencia:', error);
    res.status(500).json({ error: error.message });
  }
});

// Puerto del servidor
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}`));

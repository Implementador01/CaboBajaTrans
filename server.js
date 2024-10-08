const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Ruta para enviar el correo electrónico
app.post('/send-email', async (req, res) => {
  const { formData, servicios, total, email } = req.body;

  // Configuración de Nodemailer
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'tuemail@gmail.com', // Reemplaza con tu correo Gmail
      pass: 'tucontraseña',       // Reemplaza con la contraseña de tu cuenta de Gmail
    },
  });

  const mailOptions = {
    from: 'tuemail@gmail.com',
    to: 'holacabobaja@gmail.com', // El correo de destino
    subject: 'Nueva Reserva de Camioneta',
    text: `
      Información del Formulario de Reserva:
      Tipo de Servicio: ${formData.servicio}
      Origen: ${formData.origen}
      Destino: ${formData.destino}
      Fecha: ${formData.fecha}
      Pasajeros: ${formData.pasajeros}
      Camioneta: ${formData.camioneta}

      Servicios Opcionales:
      Car Seat: ${servicios.carSeat}
      Beer Pack: ${servicios.beerPack}
      Booster Seat: ${servicios.boosterSeat}
      Shopping Stop: ${servicios.shoppingStop}
      Champagne Bottle: ${servicios.champagneBottle}

      Total a pagar: $${total.toFixed(2)}

      Correo de contacto del cliente: ${email}
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).send({ message: 'Correo enviado correctamente' });
  } catch (error) {
    console.error('Error al enviar el correo:', error);
    res.status(500).send({ error: 'Error al enviar el correo' });
  }
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});

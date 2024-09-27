import React, { useContext, useState } from 'react';
import { LanguageContext } from '../context/LanguageContext'; // Importar el contexto de idioma

const DudasForm: React.FC = () => {
  const { language } = useContext(LanguageContext); // Acceder al idioma actual del contexto
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    mensaje: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí podrías añadir lógica para enviar el formulario
    console.log('Formulario enviado', formData);
  };

  return (
    <form className="bg-teal-700 p-6 rounded-md shadow-md" onSubmit={handleSubmit}>
      <h2 className="text-white text-lg font-bold mb-4">
        {language === 'es' ? 'Preguntas/Comentarios/Solicitudes Especiales:' : 'Questions/Comments/Special Request:'}
      </h2>

      <div className="mb-4">
        <label className="block text-white font-semibold mb-2" htmlFor="nombre">
          {language === 'es' ? 'Nombre Completo: *' : 'Full Name: *'}
        </label>
        <input
          type="text"
          id="nombre"
          name="nombre"
          value={formData.nombre}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block text-white font-semibold mb-2" htmlFor="email">
          {language === 'es' ? 'Correo Electrónico: *' : 'Email: *'}
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block text-white font-semibold mb-2" htmlFor="telefono">
          {language === 'es' ? 'Número de Teléfono: *' : 'Phone Number: *'}
        </label>
        <input
          type="tel"
          id="telefono"
          name="telefono"
          value={formData.telefono}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block text-white font-semibold mb-2" htmlFor="mensaje">
          {language === 'es' ? 'Mensaje: *' : 'Message: *'}
        </label>
        <textarea
          id="mensaje"
          name="mensaje"
          value={formData.mensaje}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
      </div>

      <button
        type="submit"
        className="bg-white text-teal-700 font-bold py-2 px-4 rounded hover:bg-gray-300"
      >
        {language === 'es' ? 'Enviar' : 'Send'}
      </button>
    </form>
  );
};

export default DudasForm;

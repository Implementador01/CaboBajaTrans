import React, { useState, useContext } from 'react'; // Importar useContext
import { useNavigate } from 'react-router-dom';
import { LanguageContext } from '../context/LanguageContext'; // Importar el contexto de idioma

const FormularioReserva: React.FC = () => {
  const navigate = useNavigate();
  const { language } = useContext(LanguageContext); // Obtener el idioma actual del contexto

  // Definir Destinos
  const lugares = [
    "Aeropuerto de San Jose",
    "Aeropuerto Privado de San lucas",
    "1 Homes Preview Cabo",
    // ... el resto de los lugares
  ];

  const [formData, setFormData] = useState({
    servicio: '',
    origen: '',
    destino: '',
    fecha: '',
    pasajeros: 1,
    camioneta: '',
  });

  const [error, setError] = useState(false); // Estado para mostrar el error

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handlePasajerosChange = (increment: number) => {
    const maxPasajeros = formData.camioneta === 'Camioneta Jack de 10 pasajeros' ? 10 : 5;
    setFormData((prevData) => ({
      ...prevData,
      pasajeros: Math.max(1, Math.min(prevData.pasajeros + increment, maxPasajeros)),
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validación de que todos los campos estén llenos
    if (!formData.servicio || !formData.origen || !formData.destino || !formData.fecha || !formData.camioneta) {
      setError(true); // Mostrar error si faltan campos
    } else {
      setError(false); // No hay errores, proceder con la reserva
      navigate('/opcionales', { state: formData });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-3xl mx-auto bg-white shadow-md rounded p-6 space-y-6">
      {/* Selección del servicio */}
      <div className="grid grid-cols-2 gap-4 bg-gray-100 p-4 rounded">
        <div className="col-span-2 text-center text-xl font-bold text-gray-700 mb-4">
          {language === 'es' ? 'SELECCIONA TU SERVICIO' : 'SELECT YOUR SERVICE'}
        </div>
        <label className="block">
          <input
            type="radio"
            name="servicio"
            value="Viaje sencillo"
            onChange={handleChange}
            className="mr-2"
          />
          {language === 'es' ? 'Viaje Sencillo (Solo Ida)' : 'One Way Trip'}
        </label>
        <label className="block">
          <input
            type="radio"
            name="servicio"
            value="Viaje redondo"
            onChange={handleChange}
            className="mr-2"
          />
          {language === 'es' ? 'Viaje Redondo' : 'Round Trip'}
        </label>
  
      </div>

      {/* Información del servicio */}
      <div className="grid grid-cols-2 gap-4">
        {/* Origen */}
        <div>
          <label className="block text-gray-700">{language === 'es' ? 'Lugar de Origen' : 'Origin'}</label>
          <select
            name="origen"
            value={formData.origen}
            onChange={handleChange}
            className="block w-full mt-1 p-2 border border-gray-300 rounded"
          >
            <option value="">{language === 'es' ? 'Selecciona una opción' : 'Select an option'}</option>
            {lugares.map((lugar, index) => (
              <option key={index} value={lugar}>
                {lugar}
              </option>
            ))}
          </select>
        </div>

        {/* Destino */}
        <div>
          <label className="block text-gray-700">{language === 'es' ? 'Destino' : 'Destination'}</label>
          <select
            name="destino"
            value={formData.destino}
            onChange={handleChange}
            className="block w-full mt-1 p-2 border border-gray-300 rounded"
          >
            <option value="">{language === 'es' ? 'Selecciona un destino' : 'Select a destination'}</option>
            {lugares.map((lugar, index) => (
              <option key={index} value={lugar}>
                {lugar}
              </option>
            ))}
          </select>
        </div>

        {/* Fecha de salida */}
        <div className="col-span-2">
          <label className="block text-gray-700">{language === 'es' ? 'Fecha y Hora' : 'Date and Time'}</label>
          <input
            type="datetime-local"
            name="fecha"
            value={formData.fecha}
            onChange={handleChange}
            className="block w-full mt-1 p-2 border border-gray-300 rounded"
          />
        </div>
      </div>

      {/* Pasajeros y Selección de camioneta */}
      <div className="grid grid-cols-2 gap-4 items-center">
        {/* Número de pasajeros */}
        <div className="flex items-center space-x-4">
          <label className="block text-gray-700">{language === 'es' ? 'Pasajeros:' : 'Passengers:'}</label>
          <button
            type="button"
            onClick={() => handlePasajerosChange(-1)}
            className="bg-gray-300 p-2 rounded"
          >
            -
          </button>
          <span>{formData.pasajeros}</span>
          <button
            type="button"
            onClick={() => handlePasajerosChange(1)}
            className="bg-gray-300 p-2 rounded"
          >
            +
          </button>
        </div>

        {/* Selección de camioneta */}
        <div>
          <label className="block text-gray-700">{language === 'es' ? 'Vehículo' : 'Vehicle'}</label>
          <select
            name="camioneta"
            value={formData.camioneta}
            onChange={handleChange}
            className="block w-full mt-1 p-2 border border-gray-300 rounded"
          >
            <option value="">{language === 'es' ? 'Selecciona una opción' : 'Select an option'}</option>
            <option value="Suburban negra para 5 pasajeros">{language === 'es' ? 'Suburban negra para 5 pasajeros' : 'Black Suburban for 5 passengers'}</option>
            <option value="Suburban blanca para 5 pasajeros">{language === 'es' ? 'Suburban blanca para 5 pasajeros' : 'White Suburban for 5 passengers'}</option>
            <option value="Camioneta Jack de 10 pasajeros">{language === 'es' ? 'Camioneta Jack de 10 pasajeros' : 'Jack Van for 10 passengers'}</option>
            <option value="Ford Escape de 5 pasajeros">{language === 'es' ? 'Ford Escape de 5 pasajeros' : 'Ford Escape for 5 passengers'}</option>
          </select>
        </div>
      </div>

      {/* Nueva sección con leyenda */}
      <div className="bg-yellow-100 p-4 rounded text-center text-yellow-700">
        <p>{language === 'es' ? 'Nos pondremos en contacto contigo para fijar detalles' : 'We will contact you to set the time'}</p>
      </div>

      {/* Mostrar error si no se completan todos los campos */}
      {error && (
        <div className="text-red-500 text-center mt-4">
          {language === 'es' ? 'Por favor completa todos los campos.' : 'Please complete all fields.'}
        </div>
      )}

      {/* Botón para redirigir a la página de servicios opcionales */}
      <button type="submit" className="w-full bg-blue-500 text-white p-3 rounded hover:bg-blue-600">
        {language === 'es' ? 'Reservar ahora' : 'Book now'}
      </button>
    </form>
  );
};

export default FormularioReserva;

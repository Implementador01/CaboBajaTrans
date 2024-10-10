import React, { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { LanguageContext } from '../context/LanguageContext';
import { calcularPrecio } from '../utils/calcularPrecios';
import { mapeoZonas, Zona } from '../utils/mapeoZonas';

// Definir las capacidades máximas de cada tipo de camioneta
const capacidades: { [key: string]: number } = {
  "SUV (1-5 PAX)": 5,
  "VAN 1-10": 10,
  "ESCALADE 1-5": 5,
  "JAC 1-14": 14,
  "SPRINTER 1-19": 19,
};

const FormularioReserva: React.FC = () => {
  const navigate = useNavigate();
  const { language } = useContext(LanguageContext);

  const [formData, setFormData] = useState({
    servicio: '',  // "Viaje sencillo" o "Viaje redondo"
    origen: '',
    destino: '',
    fecha: '',
    pasajeros: 1,
    camioneta: '',
  });

  const [error, setError] = useState(false); // Usamos este estado para mostrar errores
  const [zona, setZona] = useState<Zona | 'especial' | null>(null);
  const [precio, setPrecio] = useState<number | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    if (name === 'destino') {
      const zonaDestino = mapeoZonas[value] || null;
      setZona(zonaDestino);
    }
  };

  useEffect(() => {
    if (formData.camioneta && zona) {
      let precioCalculado = calcularPrecio({ camioneta: formData.camioneta, zona, destino: formData.destino });

      // Si el servicio es "Viaje redondo", aumentar el precio un 40%
      if (formData.servicio === 'Viaje redondo') {
        precioCalculado *= 1.4; // Incrementa el precio en un 40%
      }

      setPrecio(precioCalculado);
    }
  }, [formData.camioneta, zona, formData.destino, formData.servicio]);

  // Función para manejar la redirección a Opcionales
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validar que todos los campos estén completos
    if (!formData.servicio || !formData.origen || !formData.destino || !formData.fecha || !formData.camioneta) {
      setError(true); // Activar el estado de error si falta información
    } else {
      setError(false); // No hay error, redirigir al siguiente paso
      navigate('/opcionales', { state: { ...formData, precio } });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-3xl mx-auto bg-white shadow-md rounded p-6 space-y-6">
      {/* Mostrar mensaje de error si faltan campos */}
      {error && (
        <div className="bg-red-100 p-4 rounded text-red-700 text-center">
          {language === 'es' ? 'Por favor, completa todos los campos.' : 'Please fill out all fields.'}
        </div>
      )}

      {/* Selección del servicio */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded" style={{ backgroundColor: '#F5DCB9' }}>
        <div className="col-span-1 md:col-span-2 text-center text-2xl font-serif font-bold text-gray-700 mb-4">
          {language === 'es' ? 'SELECCIONA TU SERVICIO' : 'SELECT YOUR SERVICE'}
        </div>
        <label className="block text-center text-blue-900 font-serif font-bold">
          <input
            type="radio"
            name="servicio"
            value="Viaje sencillo"
            onChange={handleChange}
            className="mr-2"
          />
          {language === 'es' ? 'Viaje Sencillo (Solo Ida)' : 'One Way Trip'}
        </label>
        <label className="block text-center text-blue-900 font-serif font-bold">
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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Origen */}
        <div>
          <label className="block text-center text-blue-900 font-serif font-bold mb-2">
            {language === 'es' ? 'Lugar de Origen' : 'Origin'}
          </label>
          <select
            name="origen"
            value={formData.origen}
            onChange={handleChange}
            className="block w-full mt-1 p-2 border border-gray-300 rounded"
          >
            <option value="">{language === 'es' ? 'Selecciona una opción' : 'Select an option'}</option>
            {Object.keys(mapeoZonas).map((lugar, index) => (
              <option key={index} value={lugar}>
                {lugar}
              </option>
            ))}
          </select>
        </div>

        {/* Destino */}
        <div>
          <label className="block text-center text-blue-900 font-serif font-bold mb-2">
            {language === 'es' ? 'Destino' : 'Destination'}
          </label>
          <select
            name="destino"
            value={formData.destino}
            onChange={handleChange}
            className="block w-full mt-1 p-2 border border-gray-300 rounded"
          >
            <option value="">{language === 'es' ? 'Selecciona un destino' : 'Select a destination'}</option>
            {Object.keys(mapeoZonas).map((lugar, index) => (
              <option key={index} value={lugar}>
                {lugar}
              </option>
            ))}
          </select>
        </div>

        {/* Fecha de salida */}
        <div className="col-span-1 md:col-span-2">
          <label className="block text-center text-blue-900 font-serif font-bold mb-2">
            {language === 'es' ? 'Fecha y Hora' : 'Date and Time'}
          </label>
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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
        {/* Número de pasajeros */}
        <div className="flex flex-col items-center space-x-4">
          <label className="block text-center text-blue-900 font-serif font-bold mb-2">
            {language === 'es' ? 'Pasajeros:' : 'Passengers:'}
          </label>
          <div className="flex items-center space-x-4">
            <button
              type="button"
              onClick={() => setFormData((prev) => ({
                ...prev,
                pasajeros: Math.max(prev.pasajeros - 1, 1)
              }))}
              className="bg-gray-300 p-2 rounded"
            >
              -
            </button>
            <span>{formData.pasajeros}</span>
            <button
              type="button"
              onClick={() => setFormData((prev) => ({
                ...prev,
                pasajeros: Math.min(prev.pasajeros + 1, capacidades[formData.camioneta] || 1)
              }))}
              className="bg-gray-300 p-2 rounded"
            >
              +
            </button>
          </div>
        </div>

        {/* Selección de camioneta */}
        <div>
          <label className="block text-center text-blue-900 font-serif font-bold mb-2">
            {language === 'es' ? 'Vehículo' : 'Vehicle'}
          </label>
          <select
            name="camioneta"
            value={formData.camioneta}
            onChange={handleChange}
            className="block w-full mt-1 p-2 border border-gray-300 rounded"
          >
            <option value="">{language === 'es' ? 'Selecciona una opción' : 'Select an option'}</option>
            <option value="SUV (1-5 PAX)">{language === 'es' ? 'SUV (1-5 PAX)' : 'SUV (1-5 PAX)'}</option>
            <option value="VAN 1-10">{language === 'es' ? 'VAN 1-10' : 'VAN 1-10'}</option>
            <option value="ESCALADE 1-5">{language === 'es' ? 'ESCALADE 1-5' : 'ESCALADE 1-5'}</option>
            <option value="JAC 1-14">{language === 'es' ? 'JAC 1-14' : 'JAC 1-14'}</option>
            <option value="SPRINTER 1-19">{language === 'es' ? 'SPRINTER 1-19' : 'SPRINTER 1-19'}</option>
          </select>
        </div>
      </div>

      {/* Mostrar precio calculado */}
      {precio && (
        <div className="bg-green-100 p-4 rounded text-center text-green-700">
          {language === 'es' ? `Precio estimado: $${precio.toFixed(2)}` : `Estimated Price: $${precio.toFixed(2)}`}
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

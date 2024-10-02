import React, { useState, useContext } from 'react';
import { useNavigate, useLocation } from 'react-router-dom'; 
import { LanguageContext } from '../context/LanguageContext'; // Importar el contexto de idioma

const Opcionales: React.FC = () => {
  const { language } = useContext(LanguageContext); // Acceder al idioma actual del contexto
  const navigate = useNavigate();
  const location = useLocation();
  const [servicios, setServicios] = useState({
    carSeat: 0,
    beerPack: 0,
    boosterSeat: 0,
    shoppingStop: 0,
  });

  const handleChange = (name: keyof typeof servicios, increment: number) => {
    setServicios((prev) => ({
      ...prev,
      [name]: Math.max(0, prev[name] + increment), 
    }));
  };

  const total = servicios.carSeat * 10 + servicios.beerPack * 30 + servicios.boosterSeat * 10 + servicios.shoppingStop * 50;

  return (
    <>
      <div className="container mx-auto my-8 p-6 bg-white shadow-md rounded">
        {/* Barra de Progreso */}
        <div className="flex justify-around items-center mb-8">
          <div className="text-center">
            <span className="text-blue-500 font-bold">1</span>
            <p>{language === 'es' ? 'Detalles del Servicio' : 'Service Details'}</p>
          </div>
          <div className="text-center">
            <span className="text-blue-500 font-bold">2</span>
            <p>{language === 'es' ? 'Resumen de la Reserva' : 'Reservation Summary'}</p>
          </div>
          <div className="text-center">
            <span className="text-gray-400 font-bold">3</span>
            <p>{language === 'es' ? 'Detalles de Contacto' : 'Contact Details'}</p>
          </div>
          <div className="text-center">
            <span className="text-gray-400 font-bold">4</span>
            <p>{language === 'es' ? 'Confirmación y Pago' : 'Confirmation and Payment'}</p>
          </div>
        </div>

        {/* Resumen de la Reserva */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-100 p-4 rounded shadow">
            <h2 className="text-lg font-bold mb-4">{language === 'es' ? 'Resumen' : 'Summary'}</h2>
            <p><strong>{language === 'es' ? 'Tipo de Servicio:' : 'Service Type:'}</strong> {location.state?.servicio || (language === 'es' ? 'No especificado' : 'Not specified')}</p>
            <p><strong>{language === 'es' ? 'Fecha:' : 'Date:'}</strong> {location.state?.fecha || (language === 'es' ? 'No especificado' : 'Not specified')}</p>
            <p><strong>{language === 'es' ? 'Desde:' : 'From:'}</strong> {location.state?.origen || (language === 'es' ? 'No especificado' : 'Not specified')}</p>
            <p><strong>{language === 'es' ? 'Hasta:' : 'To:'}</strong> {location.state?.destino || (language === 'es' ? 'No especificado' : 'Not specified')}</p>
            <p><strong>{language === 'es' ? 'Pasajeros:' : 'Passengers:'}</strong> {location.state?.pasajeros || (language === 'es' ? 'No especificado' : 'Not specified')}</p>
            <p><strong>{language === 'es' ? 'Vehículo:' : 'Vehicle:'}</strong> {location.state?.camioneta || (language === 'es' ? 'No especificado' : 'Not specified')}</p>
          </div>

          {/* Servicios Opcionales */}
          <div className="bg-white p-4 rounded shadow">
            <h2 className="text-lg font-bold mb-4">{language === 'es' ? 'Servicios Opcionales' : 'Optional Services'}</h2>

            {/* Servicio: Car Seat */}
            <div className="flex justify-between items-center mb-4">
              <div>
                <p>{language === 'es' ? 'Asiento para Bebé' : 'Car Seat'}</p>
                <p className="text-sm text-gray-500">{language === 'es' ? '$10.00 USD por unidad adicional' : '$10.00 USD per additional unit'}</p>
              </div>
              <div className="flex items-center space-x-2">
                <button onClick={() => handleChange('carSeat', -1)} className="bg-gray-300 p-1 rounded">-</button>
                <span>{servicios.carSeat}</span>
                <button onClick={() => handleChange('carSeat', 1)} className="bg-gray-300 p-1 rounded">+</button>
              </div>
            </div>

            {/* Servicio: Paquete de Cerveza */}
            <div className="flex justify-between items-center mb-4">
              <div>
                <p>{language === 'es' ? 'Paquete de Cerveza (12 unidades)' : 'Beer Pack (12 units)'}</p>
                <p className="text-sm text-gray-500">$30.00 USD</p>
              </div>
              <div className="flex items-center space-x-2">
                <button onClick={() => handleChange('beerPack', -1)} className="bg-gray-300 p-1 rounded">-</button>
                <span>{servicios.beerPack}</span>
                <button onClick={() => handleChange('beerPack', 1)} className="bg-gray-300 p-1 rounded">+</button>
              </div>
            </div>

            {/* Servicio: Booster Seat */}
            <div className="flex justify-between items-center mb-4">
              <div>
                <p>{language === 'es' ? 'Asiento Elevador' : 'Booster Seat'}</p>
                <p className="text-sm text-gray-500">{language === 'es' ? '$10.00 USD por unidad adicional' : '$10.00 USD per additional unit'}</p>
              </div>
              <div className="flex items-center space-x-2">
                <button onClick={() => handleChange('boosterSeat', -1)} className="bg-gray-300 p-1 rounded">-</button>
                <span>{servicios.boosterSeat}</span>
                <button onClick={() => handleChange('boosterSeat', 1)} className="bg-gray-300 p-1 rounded">+</button>
              </div>
            </div>

            {/* Servicio: Parada para Compras */}
            <div className="flex justify-between items-center mb-4">
              <div>
                <p>{language === 'es' ? 'Parada para Compras' : 'Shopping Stop'}</p>
                <p className="text-sm text-gray-500">$50.00 USD</p>
              </div>
              <div className="flex items-center space-x-2">
                <button onClick={() => handleChange('shoppingStop', -1)} className="bg-gray-300 p-1 rounded">-</button>
                <span>{servicios.shoppingStop}</span>
                <button onClick={() => handleChange('shoppingStop', 1)} className="bg-gray-300 p-1 rounded">+</button>
              </div>
            </div>
          </div>
        </div>

        {/* Total */}
        <div className="bg-gray-100 p-4 mt-6 rounded text-right">
          <p><strong>{language === 'es' ? 'Subtotal' : 'Subtotal'}:</strong> ${total.toFixed(2)} USD</p>
        </div>

        {/* Botones de navegación */}
        <div className="mt-6 flex justify-between">
          <button
            type="button"
            onClick={() => navigate(-1)} 
            className="bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-600"
          >
            {language === 'es' ? 'Regresar' : 'Go Back'}
          </button>
          <button
  className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
  onClick={() => navigate('/detalles-contacto')} // Navegar a la nueva ruta
>
  {language === 'es' ? 'Continuar' : 'Continue'}
</button>

        </div>
      </div>
    </>
  );
};

export default Opcionales;

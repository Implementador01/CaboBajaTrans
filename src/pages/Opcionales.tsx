import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom'; // Importa useNavigate y useLocation

const Opcionales: React.FC = () => {
  const navigate = useNavigate(); // Inicializa navigate correctamente
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
      [name]: Math.max(0, prev[name] + increment), // Evitar valores negativos
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
            <p>Detalles del Servicio</p>
          </div>
          <div className="text-center">
            <span className="text-blue-500 font-bold">2</span>
            <p>Resumen de la Reserva</p>
          </div>
          <div className="text-center">
            <span className="text-gray-400 font-bold">3</span>
            <p>Detalles de Contacto</p>
          </div>
          <div className="text-center">
            <span className="text-gray-400 font-bold">4</span>
            <p>Confirmación</p>
          </div>
        </div>

        {/* Resumen de la Reserva */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-100 p-4 rounded shadow">
            <h2 className="text-lg font-bold mb-4">Resumen</h2>
            <p><strong>Tipo de Servicio:</strong> {location.state?.servicio || 'No especificado'}</p>
            <p><strong>Fecha:</strong> {location.state?.fecha || 'No especificado'}</p>
            <p><strong>Desde:</strong> {location.state?.origen || 'No especificado'}</p>
            <p><strong>Hasta:</strong> {location.state?.destino || 'No especificado'}</p>
            <p><strong>Pasajeros:</strong> {location.state?.pasajeros || 'No especificado'}</p>
            <p><strong>Vehículo:</strong> {location.state?.camioneta || 'No especificado'}</p>
          </div>

          {/* Servicios Opcionales */}
          <div className="bg-white p-4 rounded shadow">
            <h2 className="text-lg font-bold mb-4">Servicios Opcionales</h2>

            {/* Servicio: Car Seat */}
            <div className="flex justify-between items-center mb-4">
              <div>
                <p>Asiento para Bebé </p>
                <p className="text-sm text-gray-500">$10.00 USD por unidad adicional</p>
              </div>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => handleChange('carSeat', -1)}
                  className="bg-gray-300 p-1 rounded"
                >
                  -
                </button>
                <span>{servicios.carSeat}</span>
                <button
                  onClick={() => handleChange('carSeat', 1)}
                  className="bg-gray-300 p-1 rounded"
                >
                  +
                </button>
              </div>
            </div>

            {/* Servicio: Paquete de Cerveza */}
            <div className="flex justify-between items-center mb-4">
              <div>
                <p>Paquete de Cerveza (12 unidades)</p>
                <p className="text-sm text-gray-500">$30.00 USD</p>
              </div>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => handleChange('beerPack', -1)}
                  className="bg-gray-300 p-1 rounded"
                >
                  -
                </button>
                <span>{servicios.beerPack}</span>
                <button
                  onClick={() => handleChange('beerPack', 1)}
                  className="bg-gray-300 p-1 rounded"
                >
                  +
                </button>
              </div>
            </div>

            {/* Servicio: Booster Seat */}
            <div className="flex justify-between items-center mb-4">
              <div>
                <p>Asiento Elevador </p>
                <p className="text-sm text-gray-500">$10.00 USD por unidad adicional</p>
              </div>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => handleChange('boosterSeat', -1)}
                  className="bg-gray-300 p-1 rounded"
                >
                  -
                </button>
                <span>{servicios.boosterSeat}</span>
                <button
                  onClick={() => handleChange('boosterSeat', 1)}
                  className="bg-gray-300 p-1 rounded"
                >
                  +
                </button>
              </div>
            </div>

            {/* Servicio: Parada para Compras */}
            <div className="flex justify-between items-center mb-4">
              <div>
                <p>Parada para Compras</p>
                <p className="text-sm text-gray-500">$50.00 USD</p>
              </div>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => handleChange('shoppingStop', -1)}
                  className="bg-gray-300 p-1 rounded"
                >
                  -
                </button>
                <span>{servicios.shoppingStop}</span>
                <button
                  onClick={() => handleChange('shoppingStop', 1)}
                  className="bg-gray-300 p-1 rounded"
                >
                  +
                </button>
              </div>
            </div>

            {/* Servicio: Champange */}
            <div className="flex justify-between items-center mb-4">
              <div>
                <p>Botella de Champaña </p>
                <p className="text-sm text-gray-500">$20.00 USD por unidad adicional</p>
              </div>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => handleChange('boosterSeat', -1)}
                  className="bg-gray-300 p-1 rounded"
                >
                  -
                </button>
                <span>{servicios.boosterSeat}</span>
                <button
                  onClick={() => handleChange('boosterSeat', 1)}
                  className="bg-gray-300 p-1 rounded"
                >
                  +
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Total */}
        <div className="bg-gray-100 p-4 mt-6 rounded text-right">
          <p><strong>Subtotal:</strong> ${total.toFixed(2)} USD</p>
        </div>

        {/* Botones de navegación */}
        <div className="mt-6 flex justify-between">
          <button
            type="button"
            onClick={() => navigate(-1)} // Volver a la página anterior
            className="bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-600"
          >
            Regresar
          </button>
          <button
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
            onClick={() => alert('Continuando a la siguiente página')}
          >
            Continuar
          </button>
        </div>
      </div>
    </>
  );
};

export default Opcionales;

import React, { useState, useContext } from 'react';
import { useNavigate, useLocation } from 'react-router-dom'; 
import { LanguageContext } from '../context/LanguageContext';

// Importar las imágenes de las camionetas
import Van from '../assets/Van.jpg';
import Escalade from '../assets/Escalade.jpg';
import JackVan from '../assets/JackVan.jpg';
import Sprinter from '../assets/Sprinter.jpg';

const Opcionales: React.FC = () => {
  const { language } = useContext(LanguageContext);
  const navigate = useNavigate();
  const location = useLocation();
  
  // Estado inicial de los servicios opcionales
  const [servicios, setServicios] = useState({
    carSeat: 0,
    beerPack: 0,
    boosterSeat: 0,
    shoppingStop: 0,
    champagneBottle: 0, // Nueva opción para la botella de champaña
  });

  // Precio base y camioneta seleccionada recibidos desde el estado
  const precioBase = location.state?.precio || 0;
  const camionetaSeleccionada = location.state?.camioneta || '';
  const origen = location.state?.origen;
  const destino = location.state?.destino;
  const pasajeros = location.state?.pasajeros;
  const fecha = location.state?.fecha;
  const servicio = location.state?.servicio;

  // Mapeo de imágenes basado en la camioneta seleccionada
  const camionetaImagenes: { [key: string]: string } = {
    "SUV (1-5 PAX)": Van,
    "VAN 1-10": Van,
    "ESCALADE 1-5": Escalade,
    "JAC 1-14": JackVan,
    "SPRINTER 1-19": Sprinter,
  };

  // Obtener la imagen de la camioneta seleccionada
  const camionetaImagen = camionetaImagenes[camionetaSeleccionada] || null;

  // Manejar cambios en los servicios opcionales
  const handleChange = (name: keyof typeof servicios, increment: number) => {
    setServicios((prev) => ({
      ...prev,
      [name]: Math.max(0, prev[name] + increment),
    }));
  };

  // Cálculo total del precio (precio base + opcionales)
  const total = precioBase 
    + (servicios.carSeat * 10) 
    + (servicios.beerPack * 30) 
    + (servicios.boosterSeat * 10) 
    + (servicios.shoppingStop * 50) 
    + (servicios.champagneBottle * 30); // Agregar costo de la botella de champaña

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
            <p>{language === 'es' ? 'Detalles de Contacto y Pago' : 'Contact Details and Payment'}</p>
          </div>
        </div>

        {/* Resumen de la Reserva */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-100 p-4 rounded shadow">
            <h2 className="text-lg font-bold mb-4">{language === 'es' ? 'Resumen' : 'Summary'}</h2>
            <p><strong>{language === 'es' ? 'Tipo de Servicio:' : 'Service Type:'}</strong> {servicio || (language === 'es' ? 'No especificado' : 'Not specified')}</p>
            <p><strong>{language === 'es' ? 'Fecha:' : 'Date:'}</strong> {fecha || (language === 'es' ? 'No especificado' : 'Not specified')}</p>
            <p><strong>{language === 'es' ? 'Desde:' : 'From:'}</strong> {origen || (language === 'es' ? 'No especificado' : 'Not specified')}</p>
            <p><strong>{language === 'es' ? 'Hasta:' : 'To:'}</strong> {destino || (language === 'es' ? 'No especificado' : 'Not specified')}</p>
            <p><strong>{language === 'es' ? 'Pasajeros:' : 'Passengers:'}</strong> {pasajeros || (language === 'es' ? 'No especificado' : 'Not specified')}</p>
            <p><strong>{language === 'es' ? 'Vehículo:' : 'Vehicle:'}</strong> {camionetaSeleccionada || (language === 'es' ? 'No especificado' : 'Not specified')}</p>
            
            {/* Mostrar la imagen de la camioneta seleccionada */}
            {camionetaImagen && (
              <div className="mt-4">
                <img
                  src={camionetaImagen}
                  alt={camionetaSeleccionada || 'Camioneta seleccionada'}
                  className="w-full h-36 object-contain rounded-lg"
                />
              </div>
            )}
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

            {/* Servicio: Botella de Champaña */}
            <div className="flex justify-between items-center mb-4">
              <div>
                <p>{language === 'es' ? 'Botella de Champaña' : 'Champagne Bottle'}</p>
                <p className="text-sm text-gray-500">$30.00 USD</p>
              </div>
              <div className="flex items-center space-x-2">
                <button onClick={() => handleChange('champagneBottle', -1)} className="bg-gray-300 p-1 rounded">-</button>
                <span>{servicios.champagneBottle}</span>
                <button onClick={() => handleChange('champagneBottle', 1)} className="bg-gray-300 p-1 rounded">+</button>
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
            onClick={() => navigate('/detalles-contacto', { 
              state: { 
                total, 
                servicios, 
                camionetaSeleccionada, 
                origen, 
                destino, 
                pasajeros, 
                fecha, 
                servicio 
              } 
            })} // Pasamos el total, servicios, y datos del formulario a la siguiente página
          >
            {language === 'es' ? 'Continuar' : 'Continue'}
          </button>
        </div>
      </div>
    </>
  );
};

export default Opcionales;

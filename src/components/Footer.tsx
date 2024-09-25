import React, { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext'; // Asegúrate de importar el contexto de idioma

const Footer: React.FC = () => {
  const { language } = useContext(LanguageContext); // Obtener el idioma actual del contexto

  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Columna de direcciones */}
        <div>
          <h4 className="text-lg font-bold text-white mb-4">
            {language === 'es' ? 'Dirección' : 'Address'}
          </h4>
          <p className="text-sm">SAN JOSÉ DEL CABO</p>
          <p className="text-sm">
            {language === 'es'
              ? 'Calle Los Pirules, lote 04, Fracc B, Colonia Buenos Aires'
              : 'Calle Los Pirules, lote 04, Fracc B, Colonia Buenos Aires'}
          </p>
          <p className="text-sm">
            {language === 'es'
              ? 'San José del Cabo, Los Cabos, B.C.S'
              : 'San José del Cabo, Los Cabos, B.C.S'}
          </p>
          <p className="mt-4 text-sm">CABO SAN LUCAS</p>
          <p className="text-sm">
            {language === 'es'
              ? 'Parcela 36 lote K Local 4, Plaza Coronado'
              : 'Parcela 36 lote K Local 4, Plaza Coronado'}
          </p>
          <p className="text-sm">
            {language === 'es'
              ? 'Cabo San Lucas, Los Cabos, Baja California Sur'
              : 'Cabo San Lucas, Los Cabos, Baja California Sur'}
          </p>
        </div>

        {/* Columna de contactos */}
        <div>
          <h4 className="text-lg font-bold text-white mb-4">
            {language === 'es' ? 'Contacto' : 'Contact'}
          </h4>
          <p className="text-sm">{language === 'es' ? 'Desde USA:' : 'From USA:'} (619) 354 3205</p>
          <p className="text-sm">{language === 'es' ? 'Móvil:' : 'Mobile:'} +52 (624) 129 7911</p>
          <p className="text-sm">
            {language === 'es' ? 'Oficina en Los Cabos:' : 'Los Cabos Office:'} +52 (624) 120 0129
          </p>
          <p className="mt-4 text-sm">E-mail: info@transportation.com</p>
        </div>

        {/* Columna de destinos */}
        <div>
          <h4 className="text-lg font-bold text-white mb-4">
            {language === 'es' ? 'Destinos Populares' : 'Popular Destinations'}
          </h4>
          <ul className="text-sm space-y-2">
            <li>Nobu Transportation</li>
            <li>Diamante Transportation</li>
            <li>Grand Solmar Transportation</li>
            <li>Rancho San Lucas Transportation</li>
            <li>Acre Baja Transportation</li>
            <li>Tamarindos Restaurant Transportation</li>
          </ul>
        </div>
      </div>
      <div className="mt-10 text-center text-sm text-gray-500">
        © 2024 {language === 'es' ? 'Nombre de tu Empresa' : 'Your Company Name'}. {language === 'es' ? 'Todos los derechos reservados.' : 'All rights reserved.'}
      </div>
    </footer>
  );
};

export default Footer;

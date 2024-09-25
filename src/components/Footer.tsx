import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Columna de direcciones */}
        <div>
          <h4 className="text-lg font-bold text-white mb-4">Address</h4>
          <p className="text-sm">SAN JOSÉ DEL CABO</p>
          <p className="text-sm">Calle Los Pirules, lote 04, Fracc B, Colonia Buenos Aires</p>
          <p className="text-sm">San José del Cabo, Los Cabos, B.C.S</p>
          <p className="mt-4 text-sm">CABO SAN LUCAS</p>
          <p className="text-sm">Parcela 36 lote K Local 4, Plaza Coronado</p>
          <p className="text-sm">Cabo San Lucas, Los Cabos, Baja California Sur</p>
        </div>

        {/* Columna de contactos */}
        <div>
          <h4 className="text-lg font-bold text-white mb-4">Contact</h4>
          <p className="text-sm">From USA: (619) 354 3205</p>
          <p className="text-sm">Mobile: +52 (624) 129 7911</p>
          <p className="text-sm">Los Cabos Office: +52 (624) 120 0129</p>
          <p className="mt-4 text-sm">E-mail: info@transportation.com</p>
        </div>

        {/* Columna de destinos */}
        <div>
          <h4 className="text-lg font-bold text-white mb-4">Popular Destinations</h4>
          <ul className="text-sm space-y-2">
            <li>Nobu Transportation</li>
            <li>Diamante Transportation</li>
            <li>Grand Solmar Transportation</li>
            <li>Rancho San Lucas Transportation</li>
            <li>Acre Baja Transportation</li>
            <li>Tamarindos Restaurant Transportation</li>
            {/* Añade más destinos si es necesario */}
          </ul>
        </div>
      </div>
      <div className="mt-10 text-center text-sm text-gray-500">
        © 2024 Your Company Name. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

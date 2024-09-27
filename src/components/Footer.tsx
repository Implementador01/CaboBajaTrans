import React from 'react';
import DudasForm from './DudasForm'; // Importar el componente con soporte para cambio de idioma

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

        {/* Formulario de contacto con soporte de idioma */}
        <div>
          <DudasForm /> {/* Llamada al componente actualizado */}
        </div>
      </div>
      <div className="mt-10 text-center text-sm text-gray-500">
        © 2024 Your Company Name. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

import React from 'react';
import FormularioReserva from '../components/FormularioReserva';

const Home: React.FC = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Bienvenido a la página principal</h1>
      <FormularioReserva />
    </div>
  );
};

export default Home;

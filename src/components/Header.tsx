import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { LanguageContext } from '../context/LanguageContext';
import LogoBlanco from '../assets/Logo_Blanco.png'; // Importamos el logo

const Header: React.FC = () => {
  const { language, setLanguage } = useContext(LanguageContext); // Accede al contexto
  const [isOpen, setIsOpen] = useState(false); // Estado para controlar el menú desplegable

  const toggleLanguage = (): void => {
    setLanguage(language === 'es' ? 'en' : 'es'); // Alterna entre 'es' y 'en'
  };

  const toggleMenu = (): void => {
    setIsOpen(!isOpen); // Alterna el estado del menú desplegable
  };

  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Menú hamburguesa y logo en pantallas pequeñas */}
        <div className="flex justify-between w-full md:w-auto items-center">
          <button
            onClick={toggleMenu}
            className="md:hidden text-white focus:outline-none flex items-center"
          >
            {/* Icono del menú hamburguesa */}
            <svg
              className="w-6 h-6 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>

          {/* Logo en el centro */}
          <div className="flex justify-center flex-grow md:ml-4">
            <img src={LogoBlanco} alt="Logo Cabo Baja Trans" className="h-12" />
          </div>

          {/* Botón de cambio de idioma en pantallas pequeñas */}
          <button
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors ml-4 md:hidden"
            onClick={toggleLanguage}
          >
            {language === 'es' ? 'EN 🇺🇸' : 'ES 🇲🇽'}
          </button>
        </div>

        {/* Menú y llamadas solo visibles en pantallas grandes */}
        <nav className="hidden md:flex items-center space-x-4">
          <Link to="/" className="hover:text-gray-400">
            {language === 'es' ? 'Inicio' : 'Home'}
          </Link>
          <Link to="/sobre-nosotros" className="hover:text-gray-400">
            {language === 'es' ? 'Sobre Nosotros' : 'About Us'}
          </Link>
          <Link to="/nuestros-transportes" className="hover:text-gray-400">
            {language === 'es' ? 'Nuestros Transportes' : 'Our Transport'}
          </Link>
        </nav>

        {/* Teléfono e idioma en pantallas grandes */}
        <div className="hidden md:flex items-center">
          <p className="mr-4">{language === 'es' ? 'Llámanos' : 'Call us'}: 62 43 18 32 31</p>
          <button
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors flex items-center"
            onClick={toggleLanguage}
          >
            {language === 'es' ? 'EN 🇺🇸' : 'ES 🇲🇽'}
          </button>
        </div>
      </div>

      {/* Menú desplegable para pantallas pequeñas */}
      {isOpen && (
        <nav className="md:hidden bg-gray-800 p-4">
          <Link to="/" className="block py-2 hover:text-gray-400">
            {language === 'es' ? 'Inicio' : 'Home'}
          </Link>
          <Link to="/sobre-nosotros" className="block py-2 hover:text-gray-400">
            {language === 'es' ? 'Sobre Nosotros' : 'About Us'}
          </Link>
          <Link to="/nuestros-transportes" className="block py-2 hover:text-gray-400">
            {language === 'es' ? 'Nuestros Transportes' : 'Our Transport'}
          </Link>
        </nav>
      )}
    </header>
  );
};

export default Header;

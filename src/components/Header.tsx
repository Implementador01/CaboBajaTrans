import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { LanguageContext } from '../context/LanguageContext';

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
        <div className="flex justify-between w-full md:w-auto">
          {/* Nombre de la empresa visible en pantallas pequeñas */}
          <span className="text-lg font-bold md:hidden">Cabo Baja Trans</span>
          <nav className="hidden md:flex space-x-4">
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
        </div>

        <div className="flex items-center">
          <p className="mr-4 hidden md:block">{language === 'es' ? 'Llámanos' : 'Call us'}: +52 123 456 7890</p>
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

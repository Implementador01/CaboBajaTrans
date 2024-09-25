import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { LanguageContext } from '../context/LanguageContext'; // Importa el contexto del idioma

const Header: React.FC = () => {
  const { language, toggleLanguage } = useContext(LanguageContext); // Accede al idioma y la función para cambiarlo

  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <nav className="flex space-x-4">
          <Link to="/" className="hover:text-gray-400">
            {language === 'es' ? 'Inicio' : 'Home'}
          </Link>
          <Link to="/sobre-nosotros" className="hover:text-gray-400">
            {language === 'es' ? 'Sobre Nosotros' : 'About Us'}
          </Link>
        </nav>
        <div className="flex items-center">
          <p className="mr-4">{language === 'es' ? 'Llámanos' : 'Call Us'}: +52 123 456 7890</p>
          <button
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors"
            onClick={toggleLanguage} // Llama a la función para cambiar el idioma
          >
            {language === 'es' ? 'EN' : 'ES'}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;

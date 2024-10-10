import React, { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';
import LogoFooter from '../assets/Logo_Footer.png'; // Importamos el logo del footer

const Footer: React.FC = () => {
  const { language } = useContext(LanguageContext);

  // URL del formulario dependiendo del idioma
  const formUrl = language === 'es'
    ? 'https://api.leadconnectorhq.com/widget/form/2QOP6YRLGZnEsCCuGS2U' // Formulario en español
    : 'https://api.leadconnectorhq.com/widget/form/4sVzNjfSdIZrXfFbSl7n'; // Formulario en inglés

  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Columna de direcciones */}
        <div>
          <h4 className="text-lg font-bold text-white mb-4">
            {language === 'es' ? 'Dirección' : 'Address'}
          </h4>
          <p className="text-sm">
            {language === 'es'
              ? 'DIRECCION: CALLE SALVADOR DALLI SN COL GUAYMITAS CP 23407'
              : 'ADDRESS: CALLE SALVADOR DALLI SN COL GUAYMITAS CP 23407'}
          </p>
        </div>

        {/* Logo en el centro */}
        <div className="flex justify-center">
          <img src={LogoFooter} alt="Logo Footer" className="h-20" />
        </div>

        {/* Columna de contactos */}
        <div>
          <h4 className="text-lg font-bold text-white mb-4">
            {language === 'es' ? 'Contacto' : 'Contact'}
          </h4>
          <p className="text-sm">
            {language === 'es' ? 'TEL OFICINA:' : 'OFFICE PHONE:'} 62 43 18 32 31
          </p>
          <p className="mt-4 text-sm">E-mail: holacabobaja@gmail.com</p>
        </div>
      </div>

      <div className="mt-10 container mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Formulario de contacto */}
        <div className="md:col-span-3">
          <iframe
            title={language === 'es' ? 'Formulario de contacto' : 'Contact Form'}
            src={formUrl}
            style={{ width: '100%', height: '550px', border: 'none', overflow: 'hidden' }}
            scrolling="no"
          ></iframe>
        </div>
      </div>

      <div className="mt-10 text-center text-sm text-gray-500">
        © 2024 {language === 'es' ? 'Cabo Baja Trans' : 'Cabo Baja Trans'}.{' '}
        {language === 'es' ? 'Todos los derechos reservados.' : 'All rights reserved.'}
      </div>
    </footer>
  );
};

export default Footer;

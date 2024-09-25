import React, { createContext, useState, ReactNode } from 'react';

// Definimos el tipo para el contexto
interface LanguageContextProps {
  language: string;
  toggleLanguage: () => void;
}

// Creamos el contexto con un valor por defecto
export const LanguageContext = createContext<LanguageContextProps>({
  language: 'es',
  toggleLanguage: () => {},
});

interface LanguageProviderProps {
  children: ReactNode;
}

// Proveedor de contexto que gestionará el idioma
export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState('es'); // 'es' por defecto para español

  const toggleLanguage = () => {
    setLanguage((prevLanguage) => (prevLanguage === 'es' ? 'en' : 'es'));
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

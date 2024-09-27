import React, { createContext, useState, ReactNode } from 'react';

// Define el contexto
interface LanguageContextProps {
  language: string;
  setLanguage: (lang: string) => void;
}

export const LanguageContext = createContext<LanguageContextProps>({
  language: 'es', // Valor por defecto
  setLanguage: () => {},
});

// Proveedor de idioma
export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState('es'); // Estado para el idioma

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

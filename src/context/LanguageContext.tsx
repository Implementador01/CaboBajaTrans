import React, { createContext, useState, ReactNode } from 'react';

// Crear el contexto
export const LanguageContext = createContext<{ 
  language: string; 
  setLanguage: (lang: string) => void; 
}>({
  language: 'es', // Idioma predeterminado
  setLanguage: () => {},
});

// Proveedor de idioma
export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState('es'); // Estado del idioma

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

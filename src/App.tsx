import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Opcionales from './pages/Opcionales';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home'; 
import NuestrosTransportes from './pages/NuestrosTransportes';
import SobreNosotros from './pages/SobreNosotros'; // Importa la página "Sobre Nosotros"
import { LanguageProvider } from './context/LanguageContext'; // Importa el proveedor de idioma

function App() {
  return (
    <LanguageProvider> {/* Envolver la aplicación en el proveedor de idioma */}
      <Router>
        <Header /> {/* El header se mostrará en todas las páginas */}
        <div className="min-h-screen">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/opcionales" element={<Opcionales />} />
            <Route path="/nuestros-transportes" element={<NuestrosTransportes />} />
            <Route path="/sobre-nosotros" element={<SobreNosotros />} /> {/* Añadir la ruta de Sobre Nosotros */}
          </Routes>
        </div>
        <Footer />
      </Router>
    </LanguageProvider>
  );
}

export default App;

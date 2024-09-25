import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FormularioReserva from './components/FormularioReserva';
import Opcionales from './pages/Opcionales';
import Header from './components/Header';
import Footer from './components/Footer';
import { LanguageProvider } from './context/LanguageContext'; // Importa el proveedor de idioma
import Home from './pages/Home'; // Importa tu componente Home

function App() {
  return (
    <LanguageProvider> {/* Envolver la aplicación en el proveedor de idioma */}
      <Router>
        <Header /> {/* El header se mostrará en todas las páginas */}
        <div className="min-h-screen">
          <Routes>
            {/* Asegúrate de que la ruta de Home esté disponible */}
            <Route path="/" element={<Home />} />
            <Route path="/reserva" element={<FormularioReserva />} />
            <Route path="/opcionales" element={<Opcionales />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </LanguageProvider>
  );
}

export default App;

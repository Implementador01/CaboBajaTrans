import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Opcionales from './pages/Opcionales';
import DetallesContacto from './pages/DetallesContacto'; 
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home'; 
import NuestrosTransportes from './pages/NuestrosTransportes'; 
import { LanguageProvider } from './context/LanguageContext'; 
import ConfirmacionPago from './pages/ConfirmacionPago';

function App() {
  return (
    <LanguageProvider>
      <Router>
        <Header />
        <div className="min-h-screen">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/opcionales" element={<Opcionales />} />
            <Route path="/nuestros-transportes" element={<NuestrosTransportes />} />
            <Route path="/detalles-contacto" element={<DetallesContacto />} /> 
            <Route path='/confirmacion-pago ' element={<ConfirmacionPago />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </LanguageProvider>
  );
}

export default App;

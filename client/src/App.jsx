import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Contextos (ejemplo)
import { AuthProvider } from './context/AuthContext';

// Componentes globales
import Navbar from './components/Navbar/Navbar';

// Páginas
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import About from './pages/About';
import NotFound from './pages/NotFound';

// Vistas dentro de un módulo
import Dashboard from './wiews/Dashboard/Dashboard';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <Routes>
          {/* Rutas principales */}
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/about" element={<About />} />

          {/* Vista del Dashboard */}
          <Route path="/dashboard" element={<Dashboard />} />

          {/* Ruta para 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
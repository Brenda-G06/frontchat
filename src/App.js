import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import SalaList from './componentes/salas';
import Usuario from './componentes/usuario';
import CriarSala from './componentes/CriarSala';

function App() {
  const navigate = useNavigate(); // Hook de navegação

  useEffect(() => {
    // Redireciona automaticamente para a rota "/entrar" ao carregar o app
    navigate('/entrar');
  }, [navigate]);

  return (
    <div className="App">
      <Routes>
        {/* Defina as rotas para cada página ou componente */}
        <Route path="/entrar" element={<Usuario />} />
        <Route path="/salas" element={<SalaList />} />
        <Route path="/criar-sala" element={<CriarSala />} />
      </Routes>
    </div>
  );
}

function AppWrapper() {
  return (
    <Router>
      <App /> {/* Agora o App está envolvido pelo Router */}
    </Router>
  );
}

export default AppWrapper;

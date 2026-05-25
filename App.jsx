import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Menu from './com/Menu';
import Login from './com/Login';
import Dashboard from './Dashboard';
import Slide from './com/Slide';
import Header from './com/Header';
import Footer from './com/Footer';
import Filme from './com/Filme'; 
import Series from './com/Serie';

function App() {
  const [user, setUser] = useState(() => {
    const usuarioSalvo = localStorage.getItem('usuario_logado');
    return usuarioSalvo ? JSON.parse(usuarioSalvo) : null;
  });

  const [busca, setBusca] = useState('');

  const handleLogin = (dadosDoUsuario) => {
    setUser(dadosDoUsuario);
    localStorage.setItem('usuario_logado', JSON.stringify(dadosDoUsuario));
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('usuario_logado');
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <div className="prime-wrapper">
            <Menu user={user} onLogout={handleLogout} busca={busca} setBusca={setBusca} />
            <Slide />
            <Header /> 
          </div>
        } />
        
        <Route path="/filme/:id" element={
          <div className="prime-wrapper">
            <Menu user={user} onLogout={handleLogout} busca={busca} setBusca={setBusca} />
            <Filme />
            <Footer />
          </div>
        } />

        <Route path="/serie/:id" element={
          <div className="prime-wrapper">
            <Menu user={user} onLogout={handleLogout} busca={busca} setBusca={setBusca} />
            <Series />
          </div>
        } />

        <Route path="/login" element={<Login onLogin={handleLogin} user={user} />} />
        
        <Route path="/dashboard" element={
          user ? <Dashboard user={user} onLogout={handleLogout} /> : <Navigate to="/login" />
        } />
      </Routes>
    </Router>
  );
}

export default App;
import React, { useState } from 'react';
import api from '../api';

const Usuario = () => {
  const [nick, setNick] = useState('');
  const [usuario, setUsuario] = useState(null);


  const registrarUsuario = async () => {
    try {
      const response = await api.post('/entrar', { nick });
      setUsuario(response.data);
    } catch (error) {
      console.error('Erro ao registrar usuário:', error);
    }
  };

  return (
    <div>
      <h1>Registrar Usuário</h1>
      <input
        type="text"
        placeholder="Digite seu nick"
        value={nick}
        onChange={(e) => setNick(e.target.value)}
      />
      <button onClick={registrarUsuario}>Registrar</button>

      {usuario && (
        <div>
          <h2>Usuário Registrado</h2>
          <p>ID: {usuario.idUser}</p>
          <p>Nick: {usuario.nick}</p>
          <p>Token: {usuario.token}</p>
        </div>
      )}
    </div>
  );
};

export default Usuario;

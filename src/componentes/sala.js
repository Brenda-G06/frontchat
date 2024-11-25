import React, { useEffect, useState } from 'react';
import api from '../api';

const SalaDetalhe = ({ salaId }) => {
  const [mensagens, setMensagens] = useState([]);

  useEffect(() => {
    const fetchMensagens = async () => {
      try {
        const response = await api.get(`/salas/${salaId}/mensagens`); // Substitua pela rota da API
        setMensagens(response.data);
      } catch (error) {
        console.error('Erro ao buscar mensagens:', error);
      }
    };

    fetchMensagens();
  }, [salaId]);

  return (
    <div>
      <h2>Mensagens da Sala</h2>
      <ul>
        {mensagens.map((msg, index) => (
          <li key={index}>
            <strong>{msg.user}:</strong> {msg.message}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SalaDetalhe;

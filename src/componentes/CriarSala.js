import React, { useState } from 'react';
import api from '../api'; // Certifique-se de ter o axios configurado

const CriarSala = () => {
  const [nome, setNome] = useState('');
  const [tipo, setTipo] = useState('');
  const [mensagem, setMensagem] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!nome || !tipo) {
      setMensagem("Por favor, preencha todos os campos.");
      return;
    }

    try {
      // Faz a requisição para criar a sala
      const response = await api.post('/salas/criar', { nome, tipo });

      if (response.status === 201) {
        setMensagem(`Sala "${nome}" criada com sucesso!`);
      }
    } catch (error) {
      setMensagem("Erro ao criar sala. Tente novamente.");
      console.error('Erro ao criar sala:', error);
    }
  };

  return (
    <div>
      <h1>Criar Nova Sala</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="nome">Nome da Sala:</label>
          <input
            type="text"
            id="nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="tipo">Tipo de Sala:</label>
          <input
            type="text"
            id="tipo"
            value={tipo}
            onChange={(e) => setTipo(e.target.value)}
          />
        </div>
        <button type="submit">Criar Sala</button>
      </form>

      {mensagem && <p>{mensagem}</p>}
    </div>
  );
};

export default CriarSala;

import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Importa useNavigate
import api from '../api';

const SalaList = () => {
  const [salas, setSalas] = useState([]);
  const [nome, setNome] = useState('');
  const [tipo, setTipo] = useState('');
  const [mensagem, setMensagem] = useState('');
  const navigate = useNavigate(); // Usado para redirecionar com a versão 6

  useEffect(() => {
    const fetchSalas = async () => {
      try {
        const response = await api.get('/listar'); // Rota da API para listar salas
        setSalas(response.data);
      } catch (error) {
        console.error('Erro ao buscar salas:', error);
      }
    };

    fetchSalas();
  }, []);

  // Função para criar a sala
  const handleCriarSala = async (e) => {
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
        // Atualiza a lista de salas após a criação
        setSalas((prevSalas) => [...prevSalas, response.data]);
        setNome('');
        setTipo('');
      }
    } catch (error) {
      setMensagem("Erro ao criar sala. Tente novamente.");
      console.error('Erro ao criar sala:', error);
    }
  };

  // Função para redirecionar para a página de criar sala
  const handleRedirecionarCriarSala = () => {
    navigate('/criar-sala'); // Redireciona usando o navigate da versão 6
  };

  return (
    <div>
      <h1>Lista de Salas</h1>

      {/* Formulário de Criação de Sala */}
      <div>
        <h2>Criar Nova Sala</h2>
        <form onSubmit={handleCriarSala}>
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

      {/* Lista de Salas */}
      <button onClick={handleRedirecionarCriarSala}>Criar Sala (Redirect)</button>
      <ul>
        {salas.map((sala) => (
          <li key={sala.id}>
            {sala.nome}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SalaList;

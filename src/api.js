import axios from 'axios';

const api = axios.create({
  baseURL: 'https://chatconsumo-xihk.vercel.app/', // Substitua pelo URL da sua API
});

export default api;

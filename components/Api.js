import axios from 'axios';

const api = axios.create({
	baseUrl: 'https://viacep.com.br/'
});

export default api;
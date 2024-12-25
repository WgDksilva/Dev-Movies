
import axios from 'axios';

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    params: {
        api_key: '5f7339d4f8e346fd7feb9608be531da8',
        language: 'pt-BR',
        page: 1
    }
});

export default api;

import axios from 'axios'

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    params: {
        api_key: '8acbb4be7409ce433e7ed9e24a0cdbeb',
        language: 'pt-BR',
        page: 1
    }
})

export default api
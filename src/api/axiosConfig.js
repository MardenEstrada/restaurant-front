import axios from 'axios';

// Configuración base de axios

const axiosInstance = axios.create({
    baseURL: 'http://localhost:8080/api',
    timeout: 5000,
    headers:{
        'Content-Type': 'application/json',
    },
});

export default axiosInstance;
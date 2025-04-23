import axios from 'axios';

const BASE_URL = window.location.origin.replace(5173, 8000);

const api = axios.create({
    baseURL: `${BASE_URL}/api/`,
    headers: {
        'Content-Type': 'application/json',
    },
});

api.interceptors.request.use(function (config) {

    const accessToken = sessionStorage.getItem('access');

    if (accessToken) {
        config.headers['Authorization'] = `Bearer ${accessToken}`;
    }

    return config;
}, function (error) {
    return Promise.reject(error);
});

export default api;
import axios from 'axios'

const BASE_URL = window.location.origin.replace('5173','8000')

const api =axios.create({
    baseURL: `${BASE_URL}/api/`,
    headers:{
        'Content-Type' : 'application/json',
    },
})

api.interceptors.request.use((config)=>{

    const accessToken = sessionStorage.getItem('token');

    if(accessToken){
        config.headers["Authorization"] = `Bearer ${accessToken}`
    }

    return config
})

export default api
import axios from 'axios';

const BASE_URL=window.location.origin.replace('5173','8000')

const api=axios.create({
    baseURL:`${BASE_URL}/api/gastos/`,
    headers:{
        "Content-Type":'application.json'
    }
})


import axios from 'axios';

const BASE_URL=window.location.origin.replace('5173','8000')

//Uso de axios básico donde le indico la url, y el tipo de contenido (Lo ultimo en la cabecera)
const api = axios.create({
  baseURL: `${BASE_URL}/api/`,
  headers: {
    "Content-Type": "application/json",
  },
});

//Añado una funcion con el llamado interceptor
api.interceptors.request.use(
  function (config) {

    //Cojo el token de acceso creado si esta logeado del sessionStorage
    const accessToken = sessionStorage.getItem("access");

    //Si existe
    if (accessToken) {
        //Lo añado a los heades para que se conecte estando identoificado
      config.headers["Authorization"] = `Bearer ${accessToken}`;
    }

    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default api;


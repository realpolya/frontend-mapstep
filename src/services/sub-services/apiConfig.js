/* --------------------------------Imports--------------------------------*/

import axios from "axios";

/* --------------------------------Variables--------------------------------*/

const BACKEND_URL = import.meta.env.VITE_EXPRESS_BACKEND_URL;

/* --------------------------------Functions--------------------------------*/

// const getToken = () => {

//     const token = localStorage.getItem('token');
//     if (!token) return null;
//     return `Bearer ${token}`;
    
// };

// const api = axios.create({
//     baseURL: BACKEND_URL
// });

// const publicApi = axios.create({
//     baseURL: BACKEND_URL
// });

const api = axios.create({
    baseURL: BACKEND_URL,
    withCredentials: true,
});

const publicApi = axios.create({
    baseURL: BACKEND_URL,
    withCredentials: true,
});

// api.interceptors.request.use(
//     function (config) {

//         const token = getToken();
//         if (token) {
//             config.headers["Authorization"] = token;
//         }

//         return config;
//     },
    
//     function (error) {
//         console.log("Request error: ", error);
//         return Promise.reject(error);
//     }
// );

/* --------------------------------Exports--------------------------------*/

export default api;
export { publicApi }
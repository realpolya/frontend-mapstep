/* --------------------------------Imports--------------------------------*/

import axios from "axios";
import Cookies from "js-cookie";

/* --------------------------------Variables--------------------------------*/

const BACKEND_URL = import.meta.env.VITE_EXPRESS_BACKEND_URL;

/* --------------------------------Functions--------------------------------*/

const api = axios.create({
    baseURL: BACKEND_URL,
    withCredentials: true,
});

axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';
axios.defaults.withCredentials = true;

api.interceptors.request.use((config) => {
    
    config.withCredentials = true;
    
    const method = (config.method || "").toLowerCase();
    const url = config.url || "";
    
    if (["post", "put", "patch", "delete"].includes(method)) {
        const csrfToken = Cookies.get("csrftoken");
        if (csrfToken) {
            config.headers["X-CSRFToken"] = csrfToken;
        }
        console.log("CSRF being sent:", Cookies.get("csrftoken"));
    }
    
    return config;
    
})

/* --------------------------------Exports--------------------------------*/

export default api;

/* --------------------------------Old Code--------------------------------*/

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


// const publicApi = axios.create({
    //     baseURL: BACKEND_URL,
    //     withCredentials: true,
    // });
    
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
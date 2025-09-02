/* --------------------------------Imports--------------------------------*/

import axios from "axios";
import Cookies from "js-cookie";

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

axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';
axios.defaults.withCredentials = true;

// CSRF token
api.interceptors.request.use((config) => {

    config.withCredentials = true;
    console.log("the cookie is", document.cookie)

    const method = (config.method || "").toLowerCase();
    const url = config.url || "";

    if (["post", "put", "patch", "delete"].includes(method)) {
        const csrfToken = Cookies.get("csrftoken");
        console.log("🍪 CSRF Token:", csrfToken);
        if (csrfToken) {
            config.headers["X-CSRFToken"] = csrfToken;
        }
    }

    return config;

})

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

/* --------------------------------Exports--------------------------------*/

export default api;
// export { publicApi }
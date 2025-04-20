/* --------------------------------Imports--------------------------------*/

import api from './apiConfig.js';
import { publicApi } from "./apiConfig.js"

/* --------------------------------Functions--------------------------------*/

const signUp = async (formData) => {
    
    try {
        const response = await publicApi.post("users/register/", formData);
        localStorage.setItem("token", response.data.access);
        return response.data.user;
    } catch (err) {
        console.log(err.response.data.error);
        throw err;
    }

};

const signIn = async (formData) => {

    try {
        const response = await publicApi.post("users/login/", formData);
        localStorage.setItem("token", response.data.access);
        return response.data.user;
    } catch (err) {
        console.log(err.response.data.error);
        throw err;
    }

};

/* --------------------------------Exports--------------------------------*/

export {
    signUp,
    signIn
}
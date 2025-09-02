/* --------------------------------Imports--------------------------------*/

import api from './apiConfig.js';
import { publicApi } from "./apiConfig.js"

/* --------------------------------Functions--------------------------------*/

const signUp = async (formData) => {
    
    try {
        const response = await publicApi.post("users/register/", formData);
        // localStorage.setItem("token", response.data.access);
        return response.data.user;
    } catch (err) {
        console.log(err.response.data.error);
        throw err;
    }

};

const signIn = async (formData) => {

    try {
        const response = await publicApi.post("users/login/", formData);
        // localStorage.setItem("token", response.data.access);
        return response.data.user;
    } catch (err) {
        console.log(err.response.data.error);
        throw err;
    }

};

// OUTDATED: local getUser from the localStorage
// now: get user from cookies & backend
const getUser = async () => {

    try {
        const response = await api.get("users/me/");
        return response.data.user;
    } catch (err) {
        console.log(err.response.data.error);
        throw err;
    }

    // const token = localStorage.getItem("token");
    // if (!token) return null;
    // return JSON.parse(atob(token.split(".")[1]));;

};

// call the API to verify token
// const verifyToken = async () => {

//     if (localStorage.getItem("token")) {
//         const response = await api.get("users/verify/");
//         localStorage.setItem("token", response.data.access);
//         return response.data.user;
//     }

//     console.log("No user");
//     return false;
// };

const verifySession = async () => {

    try {

        const response = await api.post("users/verify/");
        if (response?.data) {
            return response?.data;
        }
        return null

    } catch (err) {

        console.log(err.response.data.error);
        throw err;

    }

}

// const signOut = () => {

//     try {
//         localStorage.removeItem("token");
//         console.log("Signed out");
//     } catch (error) {
//         console.log(err.response.data.error);
//         throw err;
//     }

// };

const signOut = async () => {

    try {

        const response = await api.post("users/logout/");
        return response?.data;

    } catch (err) {

        console.log(err.response.data.error);
        throw err;
        
    }

}

/* --------------------------------Exports--------------------------------*/

export {
    signUp,
    signIn,
    getUser,
    verifySession,
    // verifyToken,
    signOut
}
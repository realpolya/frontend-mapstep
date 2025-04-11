/* --------------------------------Imports--------------------------------*/

import api from './apiConfig.js';

/* --------------------------------Functions--------------------------------*/

const getAddress = async (query) => {

    try {

        response = await api.get(`projects/inquiry/?address=${query}`);
        return response

    } catch (err) {

        console.log(err.response.data.error);
        throw err

    }
}

/* --------------------------------Exports--------------------------------*/

export { 
    getAddress
};
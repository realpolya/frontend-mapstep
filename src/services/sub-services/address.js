/* --------------------------------Imports--------------------------------*/

import api from './apiConfig.js';

/* --------------------------------Functions--------------------------------*/

const getAddress = async (query=null) => {
    try {

        let response = undefined;

        // passing queries in url and into the function
        if (query) {

            response = await api.get(`properties/?${query}`);
        
        // general retrieval of all properties
        } else {

            response = await api.get('properties/');

        }


        return response.data

    } catch (err) {

        console.log(err.response.data.error);
        throw err

    }
}

/* --------------------------------Exports--------------------------------*/

export { 
    getAddress
};
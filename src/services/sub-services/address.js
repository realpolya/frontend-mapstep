/* --------------------------------Imports--------------------------------*/

import { publicApi } from './apiConfig.js';

/* --------------------------------Functions--------------------------------*/

const getAddress = async (query) => {

    try {

        let response = await publicApi.get(`projects/inquiry/?address=${query}`);
        console.log("response is ", response.data)
        return response.data

    } catch (err) {

        console.log(err);
        throw err

    }
}

/* --------------------------------Exports--------------------------------*/

export { 
    getAddress
};
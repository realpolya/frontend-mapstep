/* --------------------------------Imports--------------------------------*/

import { publicApi } from './apiConfig.js';

/* --------------------------------Functions--------------------------------*/

const getAddress = async (query) => {

    try {

        if (query && query.length > 0) {

            let response = await publicApi.get(`projects/inquiry/?address=${query}`);
            console.log("response is ", response.data) // locate geometry in an object
            // console.log("response is ", response.data?.data?.features) // locate geometry in an object
            return response.data

        }

    } catch (err) {

        console.log(err);
        throw err

    }
}

/* --------------------------------Exports--------------------------------*/

export { 
    getAddress
};
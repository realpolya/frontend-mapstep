/* --------------------------------Imports--------------------------------*/

import api from './apiConfig.js';

/* --------------------------------Functions--------------------------------*/

const createCsrf = async () => {

    try {

        const response = await api.get("core/csrf/");
        return response;

    } catch (err) {

        console.log(err.response.data.error);
        throw err;

    }

}

/* --------------------------------Exports--------------------------------*/

export { createCsrf }
/* --------------------------------Imports--------------------------------*/

import api from './apiConfig.js';

/* --------------------------------Functions--------------------------------*/

const getMyProjects = async () => {

    try {
        const response = await api.get('projects/mine/')
        return response.data
    } catch (err) {     
        console.log(err.response.data.error);
        throw err;
    }
}

const getProject = async (id) => {

    try {
        const response = await api.get(`projects/${id}/`)
        console.log("the project requested is ", response.data)
        return response.data
    } catch (err) {
        console.log(err.response.data.error);
        throw err;
    }

}

/* --------------------------------Exports--------------------------------*/

export {
    getMyProjects,
    getProject
}
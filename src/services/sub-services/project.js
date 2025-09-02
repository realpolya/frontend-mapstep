/* --------------------------------Imports--------------------------------*/

import api from './apiConfig.js';

/* --------------------------------Functions--------------------------------*/

const getMyProjects = async () => {

    try {
        const response = await api.get('projects/mine/')
        console.log("in getMyProjects response is ", response)
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

const postProject = async (formData) => {

    try {

        const response = await api.post('projects/', formData)
        return response.data

    } catch (err) {

        console.log(err.response.data.error);
        throw err;

    }

}

/* --------------------------------Exports--------------------------------*/

export {
    getMyProjects,
    getProject,
    postProject
}
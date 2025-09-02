/* --------------------------------Imports--------------------------------*/

import * as address from "./sub-services/address.js"
import * as auth from "./sub-services/auth.js"
import * as project from "./sub-services/project.js"

/* --------------------------------Functions--------------------------------*/

const {
    getAddress
} = address

const {
    createCsrf,

    signUp,
    signIn,
    getUser,
    // verifyToken,
    verifySession,
    signOut
} = auth

const {
    getMyProjects,
    getProject,
    postProject
} = project

const services = {
    getAddress,

    createCsrf,
    signUp,
    signIn,
    getUser,
    // verifyToken,
    verifySession,
    signOut,

    getMyProjects,
    getProject,
    postProject
}

/* --------------------------------Exports--------------------------------*/

export {
    services as default,

    getAddress,

    createCsrf,
    signUp,
    signIn,
    getUser,
    // verifyToken,
    verifySession,
    signOut,

    getMyProjects,
    getProject,
    postProject
}
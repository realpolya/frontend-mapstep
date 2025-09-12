/* --------------------------------Imports--------------------------------*/

import * as address from "./sub-services/address.js"
import * as auth from "./sub-services/auth.js"
import * as project from "./sub-services/project.js"

/* --------------------------------Functions--------------------------------*/

const {
    getAddress
} = address

const {

    signUp,
    signIn,
    getUser,
    verifySession,
    signOut

} = auth

const {

    getMyProjects,
    getProject,
    postProject,
    putProject,
    archiveProject

} = project

const services = {
    getAddress,

    signUp,
    signIn,
    getUser,
    verifySession,
    signOut,

    getMyProjects,
    getProject,
    postProject,
    putProject,
    archiveProject
}

/* --------------------------------Exports--------------------------------*/

export {
    services as default,

    getAddress,

    signUp,
    signIn,
    getUser,
    verifySession,
    signOut,

    getMyProjects,
    getProject,
    postProject,
    putProject,
    archiveProject
}
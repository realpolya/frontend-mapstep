/* --------------------------------Imports--------------------------------*/

import * as address from "./sub-services/address.js"
import * as auth from "./sub-services/auth.js"
import * as project from "./sub-services/project.js"
import * as core from "./sub-services/core.js"
import create from "prompt-sync"

/* --------------------------------Functions--------------------------------*/

const {
    createCsrf
} = core

const {
    getAddress
} = address

const {

    signUp,
    signIn,
    getUser,
    verifySession,
    signOut,
    deactivAcct

} = auth

const {

    getMyProjects,
    getProject,
    postProject,
    putProject,
    archiveProject

} = project

const services = {
    createCsrf,

    getAddress,

    signUp,
    signIn,
    getUser,
    verifySession,
    signOut,
    deactivAcct,

    getMyProjects,
    getProject,
    postProject,
    putProject,
    archiveProject
}

/* --------------------------------Exports--------------------------------*/

export {
    services as default,

    createCsrf,
    
    getAddress,

    signUp,
    signIn,
    getUser,
    verifySession,
    signOut,
    deactivAcct,

    getMyProjects,
    getProject,
    postProject,
    putProject,
    archiveProject
}
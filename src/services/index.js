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
    verifyToken,
    signOut
} = auth

const {
    getMyProjects
} = project

const services = {
    getAddress,

    signUp,
    signIn,
    getUser,
    verifyToken,
    signOut,

    getMyProjects
}

/* --------------------------------Exports--------------------------------*/

export {
    services as default,

    getAddress,

    signUp,
    signIn,
    getUser,
    verifyToken,
    signOut,

    getMyProjects
}
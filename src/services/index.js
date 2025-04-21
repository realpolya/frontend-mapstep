import * as address from "./sub-services/address.js"
import * as auth from "./sub-services/auth.js"

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

const services = {
    getAddress,

    signUp,
    signIn,
    getUser,
    verifyToken,
    signOut
}

export {
    services as default,

    getAddress,

    signUp,
    signIn,
    getUser,
    verifyToken,
    signOut
    
}
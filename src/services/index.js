import * as address from "./sub-services/address.js"

const {
    getAddress
} = address

const services = {
    getAddress
}

export {
    services as default,

    getAddress
}
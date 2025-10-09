/* --------------------------------Imports--------------------------------*/

import { useState } from 'react';

import ModalsContext from "./ModalsContext";

/* --------------------------------Component--------------------------------*/

const ModalsProvider = ({ children }) => {

    const [logInOpen, setLogInOpen] = useState(false)
    const [signUpOpen, setSignUpOpen] = useState(false)

    const showLogIn = () => {
        console.log("hitting show log in")
        setLogInOpen(true)
    }
    const showSignUp = () => setSignUpOpen(true)

    const closeLogIn = () => setLogInOpen(false)
    const closeSignUp = () => setSignUpOpen(false)

    const modalsObject = { showLogIn, showSignUp, 
        closeLogIn, closeSignUp, 
        logInOpen, signUpOpen
    }

    return (
        <ModalsContext.Provider value={modalsObject}>
            {children}
        </ModalsContext.Provider>
    )
}

/* --------------------------------Export--------------------------------*/

export default ModalsProvider
/* --------------------------------Imports--------------------------------*/

import { useState, useEffect, createContext } from "react";
import { useLocation } from "react-router-dom";
import Modal from 'react-modal';

import './App.css';

import services from "./services/index.js";

import AppRoutes from "./components/allpages/AppRoutes.jsx";
import NavBar from "./components/allpages/NavBar.jsx";
import Footer from "./components/allpages/Footer.jsx";

import LogIn from "./pages/auth/LogIn.jsx";
import SignUp from "./pages/auth/SignUp.jsx";

/* --------------------------------Context--------------------------------*/

const AppContext = createContext(null);

/* --------------------------------Modal--------------------------------*/

Modal.setAppElement('#root')

/* --------------------------------Component--------------------------------*/

const App = () => {

    const location = useLocation();

    const [logInOpen, setLogInOpen] = useState(false)
    const [signUpOpen, setSignUpOpen] = useState(false)
    // const [user, setUser] = useState(services.getUser())
    const [user, setUser] = useState(null)

    const checkUserToken = async () => {

        const user = await services.verifySession();
        setUser(user || null)

    }

    const setCsrf = async () => await services.createCsrf()

    useEffect(() => {

        setCsrf();
        checkUserToken();

    }, []) // removed location.pathname from the dependency array

    const showLogIn = () => setLogInOpen(true)
    const showSignUp = () => setSignUpOpen(true)

    const closeLogIn = () => setLogInOpen(false)
    const closeSignUp = () => setSignUpOpen(false)

    const handleSignIn = data => {
        setUser(data)
    }

    const appObject = { showLogIn, showSignUp, 
        handleSignIn, closeLogIn, closeSignUp,
        user, setUser
    }

    return (
        <AppContext.Provider value={appObject}>
            <NavBar/>
            <AppRoutes/>

            <Modal
                isOpen={logInOpen}
                onRequestClose={closeLogIn}
                className="auth-modal auth-modal-login"
                overlayClassName="auth-modal-back"
            >
                <LogIn />
            </Modal>

            <Modal
                isOpen={signUpOpen}
                onRequestClose={closeSignUp}
                className="auth-modal"
                overlayClassName="auth-modal-back"
            >
                <SignUp />
            </Modal>

            <Footer/>
        </AppContext.Provider>
    )
  
}

/* --------------------------------Default--------------------------------*/

export default App
export { AppContext }
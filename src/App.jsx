/* --------------------------------Imports--------------------------------*/

import { useState, createContext } from "react";
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

    const [logInOpen, setLogInOpen] = useState(false)
    const [signUpOpen, setSignUpOpen] = useState(false)
    const [user, setUser] = useState(null)

    // const fetchData = async () => {

    //     const 

    // }

    const showLogIn = () => setLogInOpen(true)
    const showSignUp = () => setSignUpOpen(true)

    const handleSignIn = data => {
        setUser(data)
    }

    const appObject = { showLogIn, showSignUp, handleSignIn }

    return (
        <AppContext.Provider value={appObject}>
            <NavBar/>
            <AppRoutes/>

            <Modal
                isOpen={logInOpen}
                onRequestClose={() => setLogInOpen(false)}
                className="auth-modal"
                overlayClassName="auth-modal-back"
            >
                <LogIn />
            </Modal>

            <Modal
                isOpen={signUpOpen}
                onRequestClose={() => setSignUpOpen(false)}
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
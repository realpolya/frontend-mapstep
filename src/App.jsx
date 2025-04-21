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
    const [activeModal, setActiveModal] = useState(null)
    const [user, setUser] = useState(null)

    // const fetchData = async () => {

    //     const 

    // }

    const setShowLogIn = () => setLogInOpen(true)

    const handleSignIn = data => {
        setUser(data)
    }

    const appObject = { setShowLogIn, handleSignIn }

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
                <LogIn setActiveModal={setActiveModal}/>
            </Modal>

            <Footer/>
        </AppContext.Provider>
    )
  
}

/* --------------------------------Default--------------------------------*/

export default App
export { AppContext }
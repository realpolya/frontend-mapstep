/* --------------------------------Imports--------------------------------*/

import { createContext } from "react";


import './App.css'

import AppRoutes from "./components/allpages/AppRoutes.jsx"
import NavBar from "./components/allpages/NavBar.jsx"
import Footer from "./components/allpages/Footer.jsx"

/* --------------------------------Context--------------------------------*/

const AppContext = createContext(null);

/* --------------------------------Component--------------------------------*/

const App = () => {

    const appObject = {}



    return (
        <AppContext.Provider value={appObject}>
            <NavBar/>
            <AppRoutes/>
            <Footer/>
        </AppContext.Provider>
    )
  
}

/* --------------------------------Default--------------------------------*/

export default App
export { AppContext }
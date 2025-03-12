/* --------------------------------Imports--------------------------------*/

import './App.css'

import AppRoutes from "./components/allpages/AppRoutes.jsx"
import NavBar from "./components/allpages/NavBar.jsx"
import Footer from "./components/allpages/Footer.jsx"

/* --------------------------------Component--------------------------------*/

const App = () => {

  return (
    <>
        <NavBar/>
        <AppRoutes/>
        <Footer/>
    </>
  )
  
}

/* --------------------------------Default--------------------------------*/

export default App
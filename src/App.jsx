/* --------------------------------Imports--------------------------------*/

import './App.css'

import AppRoutes from "./components/allpages/AppRoutes.jsx"
import NavBar from "./components/allpages/NavBar.jsx"

/* --------------------------------Component--------------------------------*/

const App = () => {

  return (
    <>
        <NavBar/>
        <AppRoutes/>
    </>
  )
  
}

/* --------------------------------Default--------------------------------*/

export default App
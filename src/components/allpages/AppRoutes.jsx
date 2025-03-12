/* --------------------------------Imports--------------------------------*/

import { Routes, Route } from "react-router-dom"

import Home from "../../pages/Home.jsx"

/* --------------------------------Component--------------------------------*/

const AppRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Home/>} />
    </Routes>
  )
}

/* --------------------------------Export--------------------------------*/

export default AppRoutes
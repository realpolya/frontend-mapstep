/* --------------------------------Imports--------------------------------*/

import { Routes, Route } from "react-router-dom"

import Home from "../../pages/Home/Home.jsx"
import SearchResult from "../../pages/SearchResult/SearchResult.jsx"

/* --------------------------------Component--------------------------------*/

const AppRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/result" element={<SearchResult/>} />
    </Routes>
  )
}

/* --------------------------------Export--------------------------------*/

export default AppRoutes
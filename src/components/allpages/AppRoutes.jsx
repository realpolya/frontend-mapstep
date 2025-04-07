/* --------------------------------Imports--------------------------------*/

import { Routes, Route } from "react-router-dom"

import Home from "../../pages/Home.jsx"
import SearchResult from "../../pages/SearchResult.jsx"

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
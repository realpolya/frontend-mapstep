/* --------------------------------Imports--------------------------------*/

import { Routes, Route } from "react-router-dom";

import Home from "../../pages/Home/Home.jsx";
import SearchResult from "../../pages/SearchResult/SearchResult.jsx";
import Dashboard from "../../pages/Dashboard/Dashboard.jsx";

/* --------------------------------Component--------------------------------*/

const AppRoutes = () => {
  
    return (
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/result" element={<SearchResult/>} />
            <Route path="/dashboard" element={<Dashboard/>} />
        </Routes>
    )

}

/* --------------------------------Export--------------------------------*/

export default AppRoutes
/* --------------------------------Imports--------------------------------*/

import { Routes, Route } from "react-router-dom";

import Home from "../../pages/Home/Home.jsx";
import SearchResult from "../../pages/SearchResult/SearchResult.jsx";
import Dashboard from "../../pages/Dashboard/Dashboard.jsx";
import ProjectPage from "../../pages/ProjectPage/ProjectPage.jsx";
import NewForm from "../../pages/NewForm/NewForm.jsx";

import ProtectedRoute from "../ProtectedRoute.jsx";

/* --------------------------------Component--------------------------------*/

const AppRoutes = () => {
  
    return (
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/result" element={<SearchResult/>} />
            <Route path="/dashboard" element={
                <ProtectedRoute>
                    <Dashboard/>
                </ProtectedRoute>
            } />
            <Route path="/project/:projectId" element={
                <ProtectedRoute>
                    <ProjectPage/>
                </ProtectedRoute>
            } />
            <Route path="/new" element={<NewForm/>}/>

        </Routes>
    )

}

/* --------------------------------Export--------------------------------*/

export default AppRoutes
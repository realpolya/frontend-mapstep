/* --------------------------------Imports--------------------------------*/

import { Routes, Route } from "react-router-dom";

import Home from "../../pages/Home/Home.jsx";
import SearchResult from "../../pages/SearchResult/SearchResult.jsx";
import Dashboard from "../../pages/Dashboard/Dashboard.jsx";
import ProjectPage from "../../pages/ProjectPage/ProjectPage.jsx";
import NewForm from "../../pages/NewForm/NewForm.jsx";
import MyProjects from "../../pages/MyProjects/MyProjects.jsx";
import ReviewProject from "../../pages/ReviewProject/ReviewProject.jsx";

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
            <Route path="/review/:projectId" element={
                <ProtectedRoute>
                    <ReviewProject/>
                </ProtectedRoute>
            } />
            <Route path="/new" element={<NewForm/>}/>
            <Route path="/edit/:projectId" element={
                <ProtectedRoute>
                    <NewForm/>
                </ProtectedRoute>
            } />
            <Route path="/projects" element={
                <ProtectedRoute>
                    <MyProjects/>
                </ProtectedRoute>
            } />
        </Routes>
    )

}

/* --------------------------------Export--------------------------------*/

export default AppRoutes
/* --------------------------------Imports--------------------------------*/

import { Routes, Route } from "react-router-dom";

import Home from "../../pages/Home/Home.jsx";
import SearchResult from "../../pages/SearchResult/SearchResult.jsx";
import Dashboard from "../../pages/Dashboard/Dashboard.jsx";
import ProjectPage from "../../pages/ProjectPage/ProjectPage.jsx";
import NewForm from "../../pages/NewForm/NewForm.jsx";
import MyProjects from "../../pages/MyProjects/MyProjects.jsx";
import ReviewProject from "../../pages/ReviewProject/ReviewProject.jsx";
import About from "../../pages/About/About.jsx";
import FAQ from "../../pages/FAQ/FAQ.jsx";
import DeleteForm from "../../pages/NewForm/DeleteForm.jsx";
import Placeholder from "../../pages/Placeholder/Placeholder.jsx";

import ProtectedRoute from "../ProtectedRoute.jsx";
import ProjectProvider from "../../providers/Project/ProjectProvider.jsx";

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
                    <ProjectProvider>
                        <ProjectPage/>
                    </ProjectProvider>
                </ProtectedRoute>
            } />
            <Route path="/review/:projectId" element={
                <ProtectedRoute>
                    <ProjectProvider>
                        <ReviewProject/>
                    </ProjectProvider>
                </ProtectedRoute>
            } />
            <Route path="/new" element={<NewForm/>}/>
            <Route path="/edit/:projectId" element={
                <ProtectedRoute>
                    <ProjectProvider>
                        <NewForm/>
                    </ProjectProvider>
                </ProtectedRoute>
            } />
            <Route path="/delete/:projectId" element={
                <ProtectedRoute>
                    <DeleteForm/>
                </ProtectedRoute>
            } />
            <Route path="/projects" element={
                <ProtectedRoute>
                    <MyProjects/>
                </ProtectedRoute>
            } />
            <Route path="/about" element={<About/>} />
            <Route path="/faq" element={<FAQ/>} />
            <Route path="/missing" element={<Placeholder/>} />
        </Routes>
    )

}

/* --------------------------------Export--------------------------------*/

export default AppRoutes
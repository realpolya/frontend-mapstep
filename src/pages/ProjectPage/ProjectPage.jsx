/* --------------------------------Imports--------------------------------*/

import { useState, useEffect } from 'react';
import { useLocation, Link, useNavigate } from 'react-router-dom';

import "./ProjectPage.css";

import { useProject } from "../../providers/ProjectProvider.jsx";

import LotInfo from "../../components/Project/LotInfo.jsx";
import ProjectActions from "../../components/Project/ProjectActions.jsx";
import SiteMap2D from '../../components/maps/SiteMap/SiteMap2D.jsx';
import SiteMap3D from '../../components/maps/SiteMap/SiteMap3D.jsx';
import VicinityMap from '../../components/maps/VicinityMap/VicinityMap.jsx';

/* --------------------------------Component--------------------------------*/

const ProjectPage = () => {

    const { siteDetails, lotGeom } = useProject()

    const location = useLocation()
    const navigate = useNavigate()

    const [msg, setMsg] = useState(null)

    useEffect(() => {

        if (location?.state && location?.state?.message) {
            setMsg(location.state.message)
        }

        navigate(location.pathname, { replace: true });

    }, [location.state])

    return (
        <main className="project-main">
            <div className="project-top-div">
                <h2 className="pl-4 mb-2 text-2xl text-redColor">{siteDetails?.title}</h2>
                <Link to="/dashboard" className="mr-4 red-link">back to dashboard</Link>
            </div>
            {msg ? (<p className="pl-4 pb-4 italic">{msg}</p>) : null}
            <div id="project-div">
                <div className="project-maps">
                    <SiteMap2D siteDetails={siteDetails} lotGeom={lotGeom}/>
                    <h6 className="h6-map">site map 2D</h6>
                    <SiteMap3D siteDetails={siteDetails} lotGeom={lotGeom}/>
                    <h6 className="h6-map">site map 3D</h6>
                    <VicinityMap siteDetails={siteDetails} lotGeom={lotGeom}/>
                    <h6 className="h6-map">vicinity map</h6>
                </div>
                <LotInfo/>
                <ProjectActions/>
            </div>
        </main>
    )

}

/* --------------------------------Export--------------------------------*/

export default ProjectPage
/* --------------------------------Imports--------------------------------*/

import { createContext, useState, useEffect } from 'react';
import { useLocation, Link, useParams, useNavigate } from 'react-router-dom';

import "./ProjectPage.css"

import services from "../../services/index.js"

import { useProject } from "../../providers/ProjectProvider.jsx"

import LotInfo from "../../components/Project/LotInfo.jsx";
import ProjectActions from "../../components/Project/ProjectActions.jsx";
import SiteMap2D from '../../components/maps/SiteMap/SiteMap2D.jsx';
import SiteMap3D from '../../components/maps/SiteMap/SiteMap3D.jsx';
import VicinityMap from '../../components/maps/VicinityMap/VicinityMap.jsx';

/* --------------------------------Context--------------------------------*/

// const ProjectContext = createContext(null);

/* --------------------------------Component--------------------------------*/

const ProjectPage = () => {

    const { siteDetails, lotGeom } = useProject()

    const location = useLocation()
    const navigate = useNavigate()

    // const [siteDetails, setSiteDetails] = useState('') // TODO: dummy data?
    // const [loading, setLoading] = useState(true);
    const { projectId } = useParams();
    // const [lotGeom, setLotGeom] = useState()
    const [msg, setMsg] = useState(null)


    // const fetchProject = async (id) => {

    //     const data = await services.getProject(id)
    //     setSiteDetails(data)
        
    // }


    // useEffect(() => {

    //     if (projectId) {
    //         fetchProject(projectId)
    //         setLoading(false)
    //     }

    // }, [projectId])


    // useEffect(() => {

    //     if (siteDetails?.info?.parcel_geometry) {
    //         setLotGeom(siteDetails?.info?.parcel_geometry)
    //     }

    // }, [siteDetails])


    useEffect(() => {

        if (location?.state && location?.state?.message) {
            setMsg(location.state.message)
        }

        navigate(location.pathname, { replace: true });

    }, [location.state])


    // const projectObject = { siteDetails }


    return (
        <main className="w-full">
            <div className="flex flex-row w-full justify-between items-center">
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
// export { ProjectContext }
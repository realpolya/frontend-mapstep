/* --------------------------------Imports--------------------------------*/

import { createContext, useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

import "./ProjectPage.css"

import services from "../../services/index.js"

import LotInfo from "../../components/Project/LotInfo.jsx";
import ProjectActions from "../../components/Project/ProjectActions.jsx";
import SiteMap2D from '../../components/maps/SiteMap/SiteMap2D.jsx';
import SiteMap3D from '../../components/maps/SiteMap/SiteMap3D.jsx';
import VicinityMap from '../../components/maps/VicinityMap/VicinityMap.jsx';

/* --------------------------------Context--------------------------------*/

const ProjectContext = createContext(null);

/* --------------------------------Component--------------------------------*/

const ProjectPage = () => {

    const [siteDetails, setSiteDetails] = useState('') // TODO: dummy data?
    const [loading, setLoading] = useState(true);
    const { projectId } = useParams();


    const fetchProject = async (id) => {

        const data = await services.getProject(id)
        console.log("data received is", data)
        setSiteDetails(data)
        
    }

    useEffect(() => {

        if (projectId) {
            fetchProject(projectId)
            setLoading(false)
        }

    }, [projectId])

    // useEffect(() => {

    //     if (!loading) console.log("site details are", siteDetails.address)

    // }, [loading, siteDetails])

    const projectObject = { siteDetails }

    return (
        <ProjectContext.Provider value={projectObject}>
            <main className="w-full">
                <div className="flex flex-row w-full justify-between items-center">
                    <h2 className="pl-4 mb-4 text-2xl text-redColor">{siteDetails?.title}</h2>
                    <Link to="/dashboard" className="mr-4 italic">back to dashboard</Link>
                </div>
                <div id="project-div">
                    <div className="project-maps">
                        <SiteMap2D siteDetails={siteDetails}/>
                        <h6 className="h6-map">site map 2D</h6>
                        <SiteMap3D siteDetails={siteDetails}/>
                        <h6 className="h6-map">site map 3D</h6>
                        <VicinityMap siteDetails={siteDetails}/>
                        <h6 className="h6-map">vicinity map</h6>
                    </div>
                    <LotInfo/>
                    <ProjectActions/>
                </div>
            </main>
        </ProjectContext.Provider>
    )

}

/* --------------------------------Export--------------------------------*/

export default ProjectPage
export { ProjectContext }
/* --------------------------------Imports--------------------------------*/

import { createContext, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import "./ProjectPage.css"

import services from "../../services/index.js"

import SiteMap2D from '../../components/maps/SiteMap/SiteMap2D.jsx';
import SiteMap3D from '../../components/maps/SiteMap/SiteMap3D.jsx';
import VicinityMap from '../../components/maps/VicinityMap/VicinityMap.jsx';

/* --------------------------------Context--------------------------------*/

const ProjectContext = createContext(null);

/* --------------------------------Component--------------------------------*/

const ProjectPage = () => {

    const [project, setProject] = useState() // TODO: dummy data?
    const { projectId } = useParams();

    const projectDetails = 0 // TODO:

    const fetchProject = async (id) => {

        const data = await services.getProject(id)
        setProject(data)
        
    }

    useEffect(() => {

        if (projectId) fetchProject(projectId)

    }, [projectId])

    // const projectObject = { projectId, projectDetails }

    return (
        // <ProjectContext.Provider value={projectObject}>
            <main>
                <h2>ProjectPage</h2>
                <div className="project-div">
                    <div className="project-maps">
                        {/* <SiteMap3D siteDetails={siteDetails}/> */}

                    </div>
                </div>
            </main>
        // </ProjectContext.Provider>
    )

}

/* --------------------------------Export--------------------------------*/

export default ProjectPage
export { ProjectContext }
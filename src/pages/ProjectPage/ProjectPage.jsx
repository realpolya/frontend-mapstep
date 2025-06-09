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

    const [siteDetails, setSiteDetails] = useState('') // TODO: dummy data?
    const [loading, setLoading] = useState(true);
    const { projectId } = useParams();


    const fetchProject = async (id) => {

        const data = await services.getProject(id)
        // console.log("data received is", data)
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

    // const projectObject = { projectId, projectDetails }

    return (
        // <ProjectContext.Provider value={projectObject}>
            <main>
                <h2>ProjectPage</h2>
                { loading ? null : <p>{siteDetails?.address}</p>}
                <div className="project-div">
                    <div className="project-maps">
                        <SiteMap2D siteDetails={siteDetails}/>
                        <SiteMap3D siteDetails={siteDetails}/>
                        <VicinityMap siteDetails={siteDetails}/>
                    </div>
                    <div>
                        info goes here
                    </div>
                </div>
            </main>
        // </ProjectContext.Provider>
    )

}

/* --------------------------------Export--------------------------------*/

export default ProjectPage
export { ProjectContext }
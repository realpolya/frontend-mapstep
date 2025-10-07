/* --------------------------------Imports--------------------------------*/

import { createContext, useContext, useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';

import services from '../services/index.js';

/* --------------------------------Context--------------------------------*/

const ProjectContext = createContext(null);

/* --------------------------------Component--------------------------------*/

const ProjectProvider = ({ children }) => {

    const location = useLocation();
    const { projectId } = useParams();


    const [siteDetails, setSiteDetails] = useState('')
    const [lotGeom, setLotGeom] = useState()
    // const [loading, setLoading] = useState(true)

    const fetchProject = async (id) => {

        try {
            const data = await services.getProject(id)
            setSiteDetails(data)
        } catch(err) {
            console.error("error while fetching project: ", err)
        }
        
    }

    useEffect(() => {

        if (projectId) {
            fetchProject(projectId)
        }

    }, [projectId, location.pathname])


    useEffect(() => {

    if (siteDetails?.info?.parcel_geometry) {
        setLotGeom(siteDetails?.info?.parcel_geometry)
    }

    }, [siteDetails])


    const projectObject = { siteDetails, lotGeom }


    return (
        <ProjectContext.Provider value={projectObject}>
            {children}
        </ProjectContext.Provider>
    )

}

const useProject = () => {
    try {
       return useContext(ProjectContext)
    } catch {
        return null
    }
}

/* --------------------------------Export--------------------------------*/

export default ProjectProvider
export { useProject }
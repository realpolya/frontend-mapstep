/* --------------------------------Imports--------------------------------*/

import { createContext } from 'react';
import { useParams } from 'react-router-dom';

import "./ProjectPage.css"

import SiteMap2D from '../../components/maps/SiteMap/SiteMap2D.jsx';
import SiteMap3D from '../../components/maps/SiteMap/SiteMap3D.jsx';
import VicinityMap from '../../components/maps/VicinityMap/VicinityMap.jsx';

/* --------------------------------Context--------------------------------*/

const ProjectContext = createContext(null);

/* --------------------------------Component--------------------------------*/

const ProjectPage = () => {

    const { projectId } = useParams();

    const projectDetails = 0 // TODO:

    const projectObject = { projectId }

    return (
        <ProjectContext.Provider value={projectObject}>
            <main>ProjectPage</main>
        </ProjectContext.Provider>
    )

}

/* --------------------------------Export--------------------------------*/

export default ProjectPage
export { ProjectContext }
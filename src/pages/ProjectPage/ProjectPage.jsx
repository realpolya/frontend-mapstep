/* --------------------------------Imports--------------------------------*/

import { useParams } from 'react-router-dom';

import "./ProjectPage.css"

/* --------------------------------Component--------------------------------*/

const ProjectPage = () => {

    const { projectId } = useParams();

    return (
        <main>ProjectPage</main>
    )

}

/* --------------------------------Export--------------------------------*/

export default ProjectPage
/* --------------------------------Imports--------------------------------*/

import { Link } from 'react-router-dom';

import './ReviewProject.css'

import useProject from "../../providers/Project/useProject.jsx";

import RedLineTool from '../../components/Project/ReviewComponents/RedLineTool.jsx'
import LotInfo from '../../components/Project/LotInfo.jsx'

/* --------------------------------Component--------------------------------*/

const ReviewProject = () => {

    const { siteDetails, lotGeom } = useProject()

    return (
        <main className="project-main">
            <div className="project-top-div">
                <h1 className="h1-heading-v2 p-4">{siteDetails?.title} – upload & review</h1>
                <Link className="mr-4 red-link" to={`/project/${siteDetails.id}`}>back to project page</Link>
            </div>
            <div className="flex sm:flex-row flex-col">
                <LotInfo/>
                <RedLineTool/>
            </div>
        </main>
    )

}

/* --------------------------------Export--------------------------------*/

export default ReviewProject
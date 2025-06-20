/* --------------------------------Imports--------------------------------*/

import { useContext } from 'react';

import "./Project.css";

import { ProjectContext } from "../../pages/ProjectPage/ProjectPage.jsx"

/* --------------------------------Component--------------------------------*/

const LotInfo = () => {

    const { siteDetails } = useContext(ProjectContext)

    return (
        <div>
            LotInfo
            <p>{siteDetails?.title}</p>
        </div>
    )

}

/* --------------------------------Export--------------------------------*/

export default LotInfo
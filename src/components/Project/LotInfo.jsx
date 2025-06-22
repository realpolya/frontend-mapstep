/* --------------------------------Imports--------------------------------*/

import { useContext } from 'react';

import "./Project.css";

import { ProjectContext } from "../../pages/ProjectPage/ProjectPage.jsx"

/* --------------------------------Component--------------------------------*/

const LotInfo = () => {

    const { siteDetails } = useContext(ProjectContext)

    return (
        <div className="mr-4 ml-4 bg-greyColor p-4 text-textAlterColor">
            <h5>Address: {siteDetails?.address}</h5>
            <ul>
                <li className="div-project-li">city: <span className="div-project-span">{siteDetails?.city}</span></li>
                <li className="div-project-li">jurisdiction: <span className="div-project-span">{siteDetails?.jurisdiction_nested?.name}</span></li>
                {/* <li className="div-project-li">zoning: <span className="div-project-span">{siteDetails?.zoning}</span></li> */}
                {/* <li className="div-project-li">year built: <span className="div-project-span">{siteDetails?.data.YearBuilt}</span></li> */}
                <li className="div-project-li">lot width: <span className="div-project-span">{siteDetails?.lot_width} ft</span></li>
                <li className="div-project-li">lot depth: <span className="div-project-span">{siteDetails?.lot_depth} ft</span></li>
                {/* <li className="div-project-li">land area (sq. ft): <span className="div-project-span">{siteDetails?.data.UsableSqftLot}</span></li>
                <li className="div-project-li">building area (sq. ft): <span className="div-project-span">{siteDetails?.data.SqftMain}</span></li> */}
            </ul>
        </div>
    )

}

/* --------------------------------Export--------------------------------*/

export default LotInfo
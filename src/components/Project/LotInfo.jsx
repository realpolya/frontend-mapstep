/* --------------------------------Imports--------------------------------*/

import { useState, useContext, useEffect } from 'react';

import "./Project.css";

import { ProjectContext } from "../../pages/ProjectPage/ProjectPage.jsx"

/* --------------------------------Component--------------------------------*/

const LotInfo = () => {

    const { siteDetails } = useContext(ProjectContext)

    const [zonings, setZonings] = useState([])

    useEffect(() => {

        if (siteDetails.zoning_nested) {
            setZonings(siteDetails.zoning_nested)
        }

    }, [siteDetails])

    return (
        <div className="mr-4 ml-4 bg-greyColor p-4 text-textAlterColor rounded-xl">
            <h5>Address: {siteDetails?.address}</h5>
            <ul className="pt-4">
                <li className="div-project-li">city: <span className="div-project-span">{siteDetails?.city}</span></li>
                <li className="div-project-li">jurisdiction: <span className="div-project-span">{siteDetails?.jurisdiction_nested?.name}</span></li>
                {/* <li className="div-project-li">zoning: <span className="div-project-span">{siteDetails?.zoning}</span></li> */}
                <li className="div-project-li">year built: <span className="div-project-span">{siteDetails?.year_built}</span></li>
                <li className="div-project-li">lot width: <span className="div-project-span">{siteDetails?.lot_width} ft</span></li>
                <li className="div-project-li">lot depth: <span className="div-project-span">{siteDetails?.lot_depth} ft</span></li>
                <li className="div-project-li">land area (sq. ft): <span className="div-project-span">{siteDetails?.land_area}</span></li>
                <li className="div-project-li">building area (sq. ft): <span className="div-project-span">{siteDetails?.bldg_area}</span></li>
            </ul>
            <h6 className="pt-4 font-bold">Zonings:</h6>
            <ul className="list-disc pl-5">
                {zonings.map(zoning => {
                        return (
                            <li>{zoning.name}</li>
                        )
                    })
                }
            </ul>
        </div>
    )

}

/* --------------------------------Export--------------------------------*/

export default LotInfo
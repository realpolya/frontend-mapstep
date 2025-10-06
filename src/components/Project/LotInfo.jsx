/* --------------------------------Imports--------------------------------*/

import { useState, useContext, useEffect } from 'react';

import "./Project.css";

// import { ProjectContext } from "../../pages/ProjectPage/ProjectPage.jsx";

/* --------------------------------Component--------------------------------*/

const LotInfo = () => {

    // const { siteDetails } = useContext(ProjectContext)

    const [zonings, setZonings] = useState([])

    useEffect(() => {

        if (siteDetails.zoning_nested) {
            setZonings(siteDetails.zoning_nested)
        }

    }, [siteDetails])

    return (
        <div className="sm:w-1/3 mr-4 ml-4 bg-greyColor p-4 text-textAlterColor rounded-xl h-[70%]">
            
            <div className="lot-info-text-div">
                <h6 className="lot-info-h6">Address:</h6>
                <p>{siteDetails?.address}</p>
            </div>

            <table className="mt-4 w-full">
                <tbody>
                    <tr>
                        <th className="proj-th">state</th>
                        <td className="proj-td">{siteDetails?.state_display}</td>
                    </tr>
                    <tr>
                        <th className="proj-th">city</th>
                        <td className="proj-td">{siteDetails?.city}</td>
                    </tr>
                    <tr>
                        <th className="proj-th">jurisdiction</th>
                        <td className="proj-td">{siteDetails?.jurisdiction_nested?.name}</td>
                    </tr>
                    <tr>
                        <th className="proj-th">year built</th>
                        <td className="proj-td">{siteDetails?.year_built}</td>
                    </tr>
                    <tr>
                        <th className="proj-th">lot width (ft)</th>
                        <td className="proj-td">{siteDetails?.lot_width}</td>
                    </tr>
                    <tr>
                        <th className="proj-th">lot depth (ft)</th>
                        <td className="proj-td">{siteDetails?.lot_depth}</td>
                    </tr>
                    <tr>
                        <th className="proj-th">land area (sq. ft)</th>
                        <td className="proj-td">{siteDetails?.land_area}</td>
                    </tr>
                    <tr>
                        <th className="proj-th">building area (sq. ft)</th>
                        <td className="proj-td">{siteDetails?.bldg_area}</td>
                    </tr>
                </tbody>
            </table>

            <h6 className="lot-info-h6 pt-6">Zonings:</h6>
            <ul className="list-disc pl-5">
                {zonings.map(zoning => {
                        return (
                            <li key={zoning.id}>{zoning.name}</li>
                        )
                    })
                }
            </ul>

            <div className="lot-info-text-div">
                <h6 className="lot-info-h6">Notes:</h6>
                <p>{siteDetails.description}</p>
            </div>
        </div>
    )

}

/* --------------------------------Export--------------------------------*/

export default LotInfo

/* --------------------------------List View--------------------------------*/

// <ul className="pt-4">
//     <li className="div-project-li">city: <span className="div-project-span">{siteDetails?.city}</span></li>
//     <li className="div-project-li">jurisdiction: <span className="div-project-span">{siteDetails?.jurisdiction_nested?.name}</span></li>
//     {/* <li className="div-project-li">zoning: <span className="div-project-span">{siteDetails?.zoning}</span></li> */}
//     <li className="div-project-li">year built: <span className="div-project-span">{siteDetails?.year_built}</span></li>
//     <li className="div-project-li">lot width: <span className="div-project-span">{siteDetails?.lot_width} ft</span></li>
//     <li className="div-project-li">lot depth: <span className="div-project-span">{siteDetails?.lot_depth} ft</span></li>
//     <li className="div-project-li">land area (sq. ft): <span className="div-project-span">{siteDetails?.land_area}</span></li>
//     <li className="div-project-li">building area (sq. ft): <span className="div-project-span">{siteDetails?.bldg_area}</span></li>
// </ul>
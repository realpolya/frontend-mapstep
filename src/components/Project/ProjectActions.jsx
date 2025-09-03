/* --------------------------------Imports--------------------------------*/

import { useContext } from 'react';
import { Link } from "react-router-dom";

import "./Project.css";

import { ProjectContext } from "../../pages/ProjectPage/ProjectPage.jsx";

/* --------------------------------Component--------------------------------*/

const ProjectActions = () => {

    const { siteDetails } = useContext(ProjectContext)

    return (
        <div className="sm:w-1/3 pb-32 sm:pb-0 ml-4 sm:ml-0 mt-4 sm:mt-0 mr-4 h-[70%] flex flex-col justify-between">
            <div className="mb-4">
                <h5 className="proj-action-h5">quick actions</h5>
                <div className="grid grid-cols-2 gap-4">
                    <Link className="proj-action-link bg-lightGreyColor" to="/">generate visual code representation</Link>
                    <Link className="proj-action-link bg-blueLight" to="/">permits & documents</Link>
                    <Link className="proj-action-link bg-green2Color" to={`/review/${siteDetails.id}`}>upload & review drawings</Link>
                    <Link className="proj-action-link bg-green1Color" to="/">generate construction possibilities</Link>
                </div>
            </div>
            <div className="mb-4">
                <h5 className="proj-action-h5">recent files</h5>
                <div className="p-4 bg-lightGreyColor rounded-xl">
                    Files will be here
                </div>
            </div>
            <div>
                <h5 className="proj-action-h5">links</h5>
                {/* need to fix the CSS width of the links below, do not shrink properly */}
                <div className="flex flex-row gap-2">
                    <a href={`${siteDetails?.jurisdiction_nested?.website}`} 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="proj-link-a"
                    >{siteDetails?.jurisdiction_nested?.name} portal</a>
                    <a href={`${siteDetails?.jurisdiction_nested?.website}`} 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="proj-link-a"
                    >permit application</a>
                    <a href={`${siteDetails?.jurisdiction_nested?.website}`} 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="proj-link-a"
                    >open autoCAD / Revit</a>
                </div>
            </div>
        </div>
    )

}

/* --------------------------------Export--------------------------------*/

export default ProjectActions
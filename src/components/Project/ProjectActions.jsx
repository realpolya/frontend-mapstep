/* --------------------------------Imports--------------------------------*/

import { useContext } from 'react';
import { Link } from "react-router-dom";

import "./Project.css";

import { ProjectContext } from "../../pages/ProjectPage/ProjectPage.jsx";

/* --------------------------------Component--------------------------------*/

const ProjectActions = () => {

    const { siteDetails } = useContext(ProjectContext)

    return (
        <div className="mr-4">
            <div className="mb-4">
                <h5 className="proj-action-h5">quick actions</h5>
                <div className="grid grid-cols-2 gap-4">
                    <Link className="proj-action-link" to="/">generate visual code representation</Link>
                    <Link className="proj-action-link" to="/">permits & documents</Link>
                    <Link className="proj-action-link" to="/">upload & review drawings</Link>
                    <Link className="proj-action-link" to="/">generate construction possibilities</Link>
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
                <div className="flex flex-row gap-4">
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
/* --------------------------------Imports--------------------------------*/

import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import './ReviewProject.css'

import { useProject } from "../../providers/ProjectProvider.jsx";

import RedLineTool from '../../components/Project/ReviewComponents/RedLineTool.jsx'
import LotInfo from '../../components/Project/LotInfo.jsx'


/* --------------------------------Component--------------------------------*/

const ReviewProject = () => {

    const { siteDetails, lotGeom } = useProject()


    return (
        <main>
            ReviewProject
            <div>

            </div>
            <div className="flex flex-row">
                <LotInfo/>
                <RedLineTool/>
            </div>
        </main>
    )

}

/* --------------------------------Export--------------------------------*/

export default ReviewProject
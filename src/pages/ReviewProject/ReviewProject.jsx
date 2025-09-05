/* --------------------------------Imports--------------------------------*/

import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import './ReviewProject.css'

import RedLineTool from '../../components/Project/ReviewComponents/RedLineTool.jsx'
import LotInfo from '../../components/Project/LotInfo.jsx'


/* --------------------------------Component--------------------------------*/

const ReviewProject = () => {

    const { state } = useLocation()
    
    const [siteDetails, setSiteDetails] = useState()

    useEffect(() => {

        console.log("sitedetails are", state.siteDetails)
        setSiteDetails(state.siteDetails)

    }, [])

    return (

        <main>
            ReviewProject
            <div>

            </div>
            {/* <LotInfo/> */}
            <RedLineTool/>
        </main>
    )

}

/* --------------------------------Export--------------------------------*/

export default ReviewProject
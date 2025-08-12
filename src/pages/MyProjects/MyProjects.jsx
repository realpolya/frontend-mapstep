/* --------------------------------Imports--------------------------------*/

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import services from "../../services/index.js";

import "./MyProjects.css";


/* --------------------------------Component--------------------------------*/

const MyProjects = () => {
    
    const [myProjects, setMyProjects] = useState([])
    
    const fetchMyProjects = async () => setMyProjects(await services.getMyProjects())


    useEffect(() => {

       fetchMyProjects()

    }, [])


    return (
        <main>
            <h2>MyProjects</h2>
            <div>
                {myProjects.map(project => {
                    return (
                        <Link>
                            <h6>{project.title}</h6>
                        </Link>
                    )
                })}
            </div>
        </main>
    )

}

/* --------------------------------Export--------------------------------*/

export default MyProjects
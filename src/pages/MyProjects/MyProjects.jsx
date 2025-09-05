/* --------------------------------Imports--------------------------------*/

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import services from "../../services/index.js";
import MiniProjectMap from "../../components/maps/MiniProjectMap/MiniProjectMap.jsx";

import "./MyProjects.css";


/* --------------------------------Varables--------------------------------*/

const limit = 4 // limit of projects per page

/* --------------------------------Component--------------------------------*/

const MyProjects = () => {

    // TODO: 8 projects per page
    
    const [myProjects, setMyProjects] = useState([])
    const [displayedProjects, setDisplayedProjects] = useState([])
    const [count, setCount] = useState([0, 7]) // indices of the projects
    
    const fetchMyProjects = async () => {

        const fetched = await services.getMyProjects()
        setMyProjects(fetched.reverse())

    }


    useEffect(() => {

       fetchMyProjects()

    }, [])

    useEffect(() => {

        if (myProjects.length > 0) {

            const currentProj = []
            let i = count[0]

            for (let c = 0; c < limit; c++) {

                currentProj.push(myProjects[i]);
                i++;

            }

            setDisplayedProjects(currentProj)

        }

    }, [myProjects]) // add arrows to the dependency array


    return (
        <main>
            <h2>MyProjects</h2>
            <div className="my-projects-arrows">
                <p>⬅️ Previous</p>
                <p>Next ➡️</p>
            </div>
            <div>
                {displayedProjects.map(project => {
                    return (
                        <Link to={`/project/${project.id}`} className="project-card" key={project.id}>
                            <MiniProjectMap project={project}/>
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
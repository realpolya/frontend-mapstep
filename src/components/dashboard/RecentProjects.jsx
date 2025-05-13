/* --------------------------------Imports--------------------------------*/

import { useState, useEffect } from "react"

import services from "../../services/index.js"

import MiniProjectMap from "../maps/MiniProjectMap/MiniProjectMap.jsx"

/* --------------------------------Component--------------------------------*/

const RecentProjects = () => {

    const [myProjects, setMyProjects] = useState([])

    const fetchMyProjects = async () => {
        const projects = await services.getMyProjects()
        console.log("projects are ", projects)
        setMyProjects(await services.getMyProjects())
    }

    useEffect(() => {
        fetchMyProjects()
    }, [])

    return (
        <div>
            <h4>recent projects</h4>
            {myProjects.map(project => {
                return (
                    <div>
                        <MiniProjectMap project={project}/>
                        <p className="italic">{project.title}</p>
                        <p>{project.address}</p>
                        {/* <p>{project.longitude}</p> */}
                    </div>
                )
            })}
        </div>
    )

}

/* --------------------------------Export--------------------------------*/

export default RecentProjects
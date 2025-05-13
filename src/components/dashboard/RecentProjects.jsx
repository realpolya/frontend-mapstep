/* --------------------------------Imports--------------------------------*/

import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

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
        <div className="pb-4">
            <div className="flex flex-row justify-between pb-4">
                <h4>recent projects</h4>
                <Link to="/" className="text-blueColor">view all projects</Link>
            </div>
            {myProjects.map(project => {
                return (
                    <Link className="block w-1/3" to="/">
                        <MiniProjectMap project={project}/>
                        <p className="italic">{project.title}</p>
                        <p className="text-xs">{project.address}</p>
                        {/* <p>{project.longitude}</p> */}
                    </Link>
                )
            })}
        </div>
    )

}

/* --------------------------------Export--------------------------------*/

export default RecentProjects
/* --------------------------------Imports--------------------------------*/

import { useState, useEffect } from "react"

import services from "../../services/index.js"

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
                return <p>{project.address}</p>
            })}
        </div>
    )

}

/* --------------------------------Export--------------------------------*/

export default RecentProjects
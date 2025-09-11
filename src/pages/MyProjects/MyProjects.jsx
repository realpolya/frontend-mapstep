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
    
    const [myProjects, setMyProjects] = useState([])
    const [loading, setLoading] = useState(true)
    const [displayedProjects, setDisplayedProjects] = useState([])
    const [count, setCount] = useState([0, limit - 1]) // initial indices of the projects
    const [maxCount, setMaxCount] = useState(0)
    const [maxPages, setMaxPages] = useState(1)
    const [currentPage, setCurrentPage] = useState(1)
    const [greyPrev, setGreyPrev] = useState(false)
    const [greyNext, setGreyNext] = useState(false)
    

    const fetchMyProjects = async () => {

        const fetched = await services.getMyProjects()
        setMyProjects(fetched.reverse())

    }

    const clickNext = () => {

        // if reached the end
        if ((count[0] + limit) > maxCount) return;

        const prevStart = count[0]
        const prevEnd = count[1]
        
        // move the indices
        setCount([prevStart + limit, prevEnd + limit])

        const newPage = currentPage + 1
        setCurrentPage(newPage)
        return; 
        
    }

    const clickPrevious = () => {

        if ((count[1] - limit) < 0) return;

        const prevStart = count[0]
        const prevEnd = count[1]
        
        // move the indices
        setCount([prevStart - limit, prevEnd - limit])

        const newPage = currentPage - 1
        setCurrentPage(newPage)
        return; 

    }

       
    useEffect(() => {
        
        fetchMyProjects()
        
    }, [])
    
    
    useEffect(() => {
        
        if (myProjects.length > 0) {
            
            const projectsNum = myProjects.length - 1
            setMaxCount(projectsNum) // index is 1 fewer
            setMaxPages(Math.ceil((projectsNum + 1)/limit))
            
            setLoading(false)
            
        }
        
    }, [myProjects])
    
    
    useEffect(() => {
                
        if (!loading) {
            
            const currentProj = []
            let i = count[0]
            
            for (let c = 0; c < limit; c++) {
                
                if (i > maxCount) break;
                
                currentProj.push(myProjects[i]);
                i++;
                
            }
            
            console.log("firing now")
            
            setDisplayedProjects(currentProj)
            
        }
        
    }, [loading, count]) // add arrows to the dependency array
    

    useEffect(() => {

        if (!loading) {
            if (count[0] == 0) {
                setGreyPrev(true)
            } else {
                setGreyPrev(false)
            }
            
            if ((count[0] + limit) > maxCount) {
                setGreyNext(true)
            } else {
                setGreyNext(false)
            }
        }

    }, [loading, count])


    return (

        <main className="normal-main">
            <div className="flex flex-row justify-between pb-8">
                <div className="flex flex-row items-end">
                    <h1 className="h1-heading-v2">All projects</h1>
                    <Link to="/dashboard" className="red-link text-center">back to dashboard</Link>
                </div>
                <div className="my-projects-arrows">
                    <button 
                        className={greyPrev ? "disabled-arrows" : "arrows-button"}
                        onClick={clickPrevious}
                    >⬅️ Previous&nbsp;</button>
                    <p> | | </p>
                    <button 
                        className={greyNext ? "disabled-arrows" : "arrows-button"}
                        onClick={clickNext}
                    >&nbsp;Next ➡️</button>
                </div>
            </div>
            <div className="grid grid-cols-2 grid-rows-2 gap-4">
                {displayedProjects.map(project => {
                    return (
                        <Link to={`/project/${project.id}`} className="project-card" key={project.id}>
                            <MiniProjectMap project={project}/>
                            <h6 className="font-normal">{project?.title}</h6>
                            <p className="text-sm">{project?.description} &nbsp;</p>
                        </Link>
                    )
                })}
            </div>
            <div id="arrows-count-div">
                <p>{currentPage}&nbsp; | &nbsp;{maxPages}</p>
            </div>
        </main>

    )

}

/* --------------------------------Export--------------------------------*/

export default MyProjects
/* --------------------------------Imports--------------------------------*/

import { useState, useEffect } from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';

import services from '../../services/index.js';

import "./NewForm.css"

/* --------------------------------Component--------------------------------*/

const DeleteForm = () => {

    const { projectId } = useParams()

    const location = useLocation()
    const navigate = useNavigate()

    const [title, setTitle] = useState(null)

    useEffect(() => {

        // console.log("location.state is ", location.state)

        if (location?.state?.title) {
            setTitle(location.state.title)
        }

    }, [location.state])


    const handleDelete = async (id) => {

        try {

            await services.archiveProject(id)
            navigate("/dashboard", { state: { message: "project successfully deleted" }})

        } catch (err) {

            console.log(err.response.data.error)
            alert(err)

        }

    }

    return (
        <main className="padded-main new-form-main">
            <h2 className="delete-form-h2">Are you sure you want to delete {title ? (<span className="italic">{title}</span>) : (
                <span className="italic">this project</span>
                )}?</h2>
            <div className="flex flex-row">
                <button className="round-button red-button pr-6" onClick={() => handleDelete(projectId)}>Yes, delete</button>
                <button className="round-button">No, take me back</button>
            </div>
        </main>
    )

}

/* --------------------------------Export--------------------------------*/


export default DeleteForm
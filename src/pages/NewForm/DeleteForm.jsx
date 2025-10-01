/* --------------------------------Imports--------------------------------*/

import { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';

import services from '../../services/index.js';

import "./NewForm.css"

/* --------------------------------Component--------------------------------*/

const DeleteForm = () => {

    const { projectId } = useParams()

    const location = useLocation()

    const [title, setTitle] = useState(null)

    useEffect(() => {

        // console.log("location.state is ", location.state)

        if (location?.state?.title) {
            setTitle(location.state.title)
        }

    }, [location.state])


    const handleDelete = async (id) => {

        await services.archiveProject(id)

    }

    return (
        <main className="padded-main new-form-main">
            <h2 className="delete-form-h2">Are you sure you want to delete {title ? (<span className="italic">{title}</span>) : (
                <span className="italic">this project</span>
                )}?</h2>
            <div className="flex flex-row">
                <button className="round-button red-button pr-6">Yes, delete</button>
                <button className="round-button">No, take me back</button>
            </div>
        </main>
    )

}

/* --------------------------------Export--------------------------------*/


export default DeleteForm
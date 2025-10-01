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
        <main>
            <h6>Are you sure you want to delete {title ? (title) : (<span>this project</span>)}?</h6>
            <button>Yes, delete</button>
            <button>No, take me back</button>
        </main>
    )

}

/* --------------------------------Export--------------------------------*/


export default DeleteForm
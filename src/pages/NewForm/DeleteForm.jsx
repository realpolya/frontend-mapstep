/* --------------------------------Imports--------------------------------*/

import { useParams } from 'react-router-dom';

import services from '../../services/index.js';

import "./NewForm.css"

/* --------------------------------Component--------------------------------*/

const DeleteForm = () => {

    const { projectId } = useParams()

    return (
        <div>DeleteForm</div>
    )

}

/* --------------------------------Export--------------------------------*/


export default DeleteForm
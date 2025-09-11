/* --------------------------------Imports--------------------------------*/

import { useContext } from 'react';
import { Link } from 'react-router-dom';

import './FAQ.css'

import { AppContext } from '../../App.jsx'

/* --------------------------------Component--------------------------------*/

const FAQ = () => {

    const { user } = useContext(AppContext)

    return (

        <main className="normal-main">
            <div className="flex flex-row items-end">
                <h1 className="h1-heading-v2">Frequently Asked Questions</h1>
                { user ? (<Link className="red-link text-center" to="/dashboard">to dashboard</Link>) : (null) }
            </div>
        </main>

    )

}

/* --------------------------------Export--------------------------------*/

export default FAQ
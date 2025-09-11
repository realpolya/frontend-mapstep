/* --------------------------------Imports--------------------------------*/

import { useContext } from 'react';
import { Link } from 'react-router-dom';

import './FAQ.css'

import { AppContext } from '../../App.jsx'

/* --------------------------------Component--------------------------------*/

const FAQ = () => {

    const { user } = useContext(AppContext)

    return (

        <main>
            <div>
                <h1>FAQ</h1>
                { user ? (<Link to="/dashboard">to dashboard</Link>) : (null) }
            </div>

        </main>

    )

}

/* --------------------------------Export--------------------------------*/

export default FAQ
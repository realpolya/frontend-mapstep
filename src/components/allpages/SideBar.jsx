/* --------------------------------Imports--------------------------------*/

import { useState, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import Modal from 'react-modal';

import { AppContext } from '../../App.jsx';

/* --------------------------------Component--------------------------------*/

const SideBar = () => {

    const { setShowLogIn } = useContext(AppContext)

    return (
        <nav className="bg-blueColor w-[200px] h-[200px]">
            <ul>
                <li>Sign Up</li>
                <button className="nav-link" onClick={()=> setShowLogIn(true)}>
                    Log In
                </button>
            </ul>
        </nav>
    )
}

/* --------------------------------Export--------------------------------*/

export default SideBar
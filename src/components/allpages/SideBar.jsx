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
                <li>Log In</li>
            </ul>
        </nav>
    )
}

/* --------------------------------Export--------------------------------*/

export default SideBar
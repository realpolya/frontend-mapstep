/* --------------------------------Imports--------------------------------*/

import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Modal from 'react-modal';

/* --------------------------------Component--------------------------------*/

const SideBar = () => {

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
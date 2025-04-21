/* --------------------------------Imports--------------------------------*/

import { useState, useContext } from 'react';
import { NavLink } from 'react-router-dom';

import { AppContext } from '../../App.jsx';

/* --------------------------------Component--------------------------------*/

const SideBar = () => {

    const { showLogIn, showSignUp } = useContext(AppContext)

    return (
        <nav className="bg-blueColor w-[200px] h-[200px]">
            <ul className='flex flex-col'>
                <button className="nav-link" onClick={()=> showSignUp(true)}>
                    Sign Up
                </button>
                <button className="nav-link" onClick={()=> showLogIn(true)}>
                    Log In
                </button>
            </ul>
        </nav>
    )
}

/* --------------------------------Export--------------------------------*/

export default SideBar
/* --------------------------------Imports--------------------------------*/

import { useState, useContext } from 'react';
import { useNavigate, NavLink } from 'react-router-dom';

import services from "../../services/index.js"

import { AppContext } from '../../App.jsx';

/* --------------------------------Component--------------------------------*/

const SideBar = () => {

    const navigate = useNavigate()
    const { showLogIn, showSignUp, user, setUser } = useContext(AppContext)

    const logOut = async () => {

        await services.signOut()
        setUser(null)
        navigate("/")
        window.location.reload()
        
    }

    const unauthMenu = (
        <>
            <button className="nav-link" onClick={()=> showSignUp(true)}>
                Sign Up
            </button>
            <button className="nav-link" onClick={()=> showLogIn(true)}>
                Log In
            </button>
        </>
    )

    const authMenu = (
        <>
            <button className="nav-link" onClick={()=> navigate("/dashboard")}>
                Dashboard
            </button>
            <button className="nav-link" onClick={()=> logOut()}>
                Log Out
            </button>
        </>
    )


    return (
        <div className="bg-blueColor w-[200px] h-[60px] rounded-xl flex flex-col justify-center items-center">
            <ul className='flex flex-col'>
                {user ? authMenu : unauthMenu}
            </ul>
        </div>
    )
}

/* --------------------------------Export--------------------------------*/

export default SideBar
/* --------------------------------Imports--------------------------------*/

import "./Dashboard.css"

import { useEffect, useState, useContext } from "react";
import { useLocation } from "react-router-dom";

import { AppContext } from "../../App.jsx";

import AccountInfo from "../../components/dashboard/AccountInfo.jsx";
import QuickActions from "../../components/dashboard/QuickActions.jsx";
import RecentProjects from "../../components/dashboard/RecentProjects.jsx";

/* --------------------------------Variables--------------------------------*/



/* --------------------------------Component--------------------------------*/

const Dashboard = () => {

    const { user } = useContext(AppContext)

    const location = useLocation()

    const [newMsg, setNewMsg] = useState("")

    useEffect(() => {

        if (location.state && location.state.message) {
            setNewMsg(location.state.message)
        }

    }, [location.state])

    return (
        <main className="normal-main">
            <h1 className="text-xl">welcome back, <span className="italic">{user.username}</span></h1>
            <p>{newMsg}</p>
            <div className="flex sm:flex-row flex-col p-4 w-full">
                <div className="flex flex-col p-4 sm:w-1/2 w-full">
                    <RecentProjects/>
                    <QuickActions/>
                </div>
                <AccountInfo/>
            </div>
        </main>
    )

}

/* --------------------------------Export--------------------------------*/

export default Dashboard

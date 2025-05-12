/* --------------------------------Imports--------------------------------*/

import "./Dashboard.css"

import { useContext } from "react";

import { AppContext } from "../../App.jsx";

import AccountInfo from "../../components/dashboard/AccountInfo.jsx";
import QuickActions from "../../components/dashboard/QuickActions.jsx";
import RecentProjects from "../../components/dashboard/RecentProjects.jsx";

/* --------------------------------Variables--------------------------------*/



/* --------------------------------Component--------------------------------*/

const Dashboard = () => {

    const { user } = useContext(AppContext)

    return (
        <main className="flex flex-col p-4 w-full">
            <h1>welcome back, <span className="italic">{user.username}</span></h1>
            <div className="flex flex-row p-4 w-full">
                <div className="flex flex-col p-4 w-1/2">
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

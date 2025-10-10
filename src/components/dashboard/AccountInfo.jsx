/* --------------------------------Imports--------------------------------*/

import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import "./dashboard-comp.css"

// import { AppContext } from "../../App.jsx";
import useAuth from "../../providers/Auth/useAuth.jsx";

import services from "../../services/index.js";

/* --------------------------------Component--------------------------------*/

const AccountInfo = () => {

    const { user, setUser } = useAuth()

    const navigate = useNavigate()

    const deactivateUser = async () => {

        const deactivation = await services.deactivAcct()
        console.log(deactivation)
        await services.signOut()
        setUser(null)
        navigate("/")
        window.location.reload()

    }

    return (
        <div className="p-4 sm:w-1/2 w-full">
            <h4 className="dash-h4 pb-4">account information</h4>
            <div className="bg-greyColor rounded-xl p-4">
                <ul>
                    <li>username: <span className="info-span">{user?.username}</span></li>
                    <li>email: <span className="info-span">{user?.email}</span></li>
                    <li>active projects: <span className="info-span">?</span></li>
                    <li>subscription plan: <span className="info-span">unlimited</span></li>
                </ul>
                <h5>account actions</h5>
                <div className="three-button-div">
                    <button className="account-button hover-btn" onClick={() => navigate("/missing")}>change subscription plan</button>
                    <button className="account-button hover-btn" onClick={() => navigate("/missing")}>cancel subscription</button>
                    <button className="account-button hover-btn" onClick={() => navigate("/missing")}>general settings</button>
                    <button className="account-button hover-btn" onClick={() => navigate("/missing")}>change password</button>
                    <button className="account-button hover-btn" onClick={() => navigate("/missing")}>privacy settings</button>
                    <button className="account-button hover-btn" onClick={deactivateUser}>deactivate account</button>
                </div>
            </div>
        </div>
    )

}

/* --------------------------------Export--------------------------------*/

export default AccountInfo
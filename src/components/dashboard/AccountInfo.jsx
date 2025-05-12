/* --------------------------------Imports--------------------------------*/

import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import "./dashboard-comp.css"

import { AppContext } from "../../App.jsx";

/* --------------------------------Component--------------------------------*/

const AccountInfo = () => {

    const { user } = useContext(AppContext)

    const navigate = useNavigate()

    return (
        <div className="p-4">
            <h4>account information</h4>
            <div>
                <ul>
                    <li>username: <span className="info-span">{user?.username}</span></li>
                    <li>email: <span className="info-span">{user?.email}</span></li>
                    <li>active projects: <span className="info-span">?</span></li>
                    <li>subscription plan: <span className="info-span">unlimited</span></li>
                </ul>
                <h5>account actions</h5>
                <div>
                    <button className="account-button" onClick={() => navigate("/")}>change subscription plan</button>
                    <button className="account-button" onClick={() => navigate("/")}>cancel subscription</button>
                    <button className="account-button" onClick={() => navigate("/")}>general settings</button>
                    <button className="account-button" onClick={() => navigate("/")}>change password</button>
                    <button className="account-button" onClick={() => navigate("/")}>privacy settings</button>
                    <button className="account-button" onClick={() => navigate("/")}>delete account</button>
                </div>
            </div>
        </div>
    )

}

/* --------------------------------Export--------------------------------*/

export default AccountInfo
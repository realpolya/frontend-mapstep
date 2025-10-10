/* --------------------------------Imports--------------------------------*/

import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import services from "../../services/index.js";

import useAuth from "../../providers/Auth/useAuth.jsx";
import useModals from "../../providers/Modals/useModals.jsx";
// import { AppContext } from "../../App.jsx";

/* --------------------------------Variables--------------------------------*/

const initial = {
    username: "",
    password: "",
}

/* --------------------------------Component--------------------------------*/

const LogIn = () => {

    const { handleSignIn } = useAuth()
    const { closeLogIn, showSignUp } = useModals()

    const navigate = useNavigate()
    const [formData, setFormData] = useState(initial)
    const [errMsg, setErrMsg] = useState(null)


    const handleChange = e => setFormData(prev => ({...prev, [e.target.name]: e.target.value}));

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            const userData = await services.signIn(formData)
            handleSignIn(userData)
    
            // console.log("user is ", userData)

            navigate("/dashboard")
            closeLogIn()
            return;

        } catch(err) {

            console.log(err.response.data.error);
            setErrMsg(err.response.data.error);

        }

        // window.location.reload()
    };

    const switchToRegister = () => {

        closeLogIn()
        showSignUp()

    }

    return (
        <>
            <button className='close-button' onClick={closeLogIn}>
                x
            </button>

            <form onSubmit={handleSubmit} className="space-y-4 mb-4 w-full flex flex-col justify-center items-center">

                <h2 className="text-2xl font-bold text-textColor text-center">Log In</h2>

                <div className="flex flex-col w-full">
                    <label htmlFor="username" className="text-sm font-medium text-gray-700">
                        Username
                    </label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                        placeholder="Enter your username"
                        className="p-2 border rounded-md focus:ring-teal-500 focus:border-teal-500"
                        required
                    />
                </div>

                <div className="flex flex-col w-full">
                    <label htmlFor="password" className="text-sm font-medium text-gray-700">
                        Password
                    </label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        placeholder="Enter your password"
                        className="p-2 border rounded-md focus:ring-teal-500 focus:border-teal-500"
                        required
                    />
                </div>

                { errMsg ? (<p className="text-left text-redColor 
                pb-2 w-full italic">{errMsg}</p>) : (<p className="pb-2">&nbsp;</p>) }

                <button type="submit" className="round-button">
                    Log In
                </button>

            </form>
            <p>
                Don't have an account?{" "}
                <button onClick={switchToRegister} 
                className="text-buttonColor underline">
                    Register
                </button>
            </p>
        </>
    )

}

/* --------------------------------Export--------------------------------*/

export default LogIn
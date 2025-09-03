/* --------------------------------Imports--------------------------------*/

import { useState, useContext } from 'react';
import { useNavigate } from "react-router-dom";

import services from '../../services/index.js';

import "./auth.css";

import { AppContext } from '../../App.jsx';

/* --------------------------------Variables--------------------------------*/

const initial = {
    username: "",
    email: "",
    password: "",
    confirm_password: ""
}

/* --------------------------------Component--------------------------------*/

const SignUp = () => {

    const navigate = useNavigate()
    const [formData, setFormData] = useState(initial)

    const { handleSignIn, closeSignUp } = useContext(AppContext)

    const handleChange = e => setFormData(prev => ({...prev, [e.target.name]: e.target.value}));

    const handleSubmit = async (e) => {

        e.preventDefault();

        if (formData.password !== formData.confirm_password) {
            const errMessage = document.getElementById("errMessage");
            errMessage.style.display = "inline"

            return;
        }

        const userData = await services.signUp(formData)
        handleSignIn(userData)
        console.log("user is ", userData)
        
        navigate("/dashboard")
        closeSignUp()
        // window.location.reload()

    };
    

    return (
        <form onSubmit={handleSubmit} >

            <button className='close-button' onClick={closeSignUp}>
                x
            </button>

            <h2 className="h2-heading">welcome to mapstep.</h2>

            <div className="space-y-4">
                <div>
                    <label
                        htmlFor="username"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Username
                    </label>
                    <input
                        type="text"
                        id="username-1"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                        placeholder="Enter your username"
                        className="mt-1 p-2 w-full border rounded-md focus:ring-teal-500 focus:border-teal-500"
                        required
                    />
                </div>
                <div>
                    <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter your email"
                        className="mt-1 p-2 w-full border rounded-md focus:ring-teal-500 focus:border-teal-500"
                        required
                    />
                </div>
                <div>
                    <label
                        htmlFor="password"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Password
                    </label>
                    <input
                        type="password"
                        id="password-1"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        placeholder="Enter your password"
                        className="mt-1 p-2 w-full border rounded-md focus:ring-teal-500 focus:border-teal-500"
                        required
                    />
                </div>
                <div id="confirm-pass">
                    <label
                        htmlFor="confirm_password"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Confirm Password
                    </label>
                    <input
                        type="password"
                        id="confirm_password"
                        name="confirm_password"
                        value={formData.confirm_password}
                        onChange={handleChange}
                        placeholder="Confirm your password"
                        className="mt-1 p-2 w-full border rounded-md focus:ring-teal-500 focus:border-teal-500"
                        required
                    />
                    <p id="errMessage" className="hidden text-redColor italic">
                        passwords do not match
                    </p>
                </div>
                <button type="submit" className="round-button hover:bg-blueColor">
                    Register
                </button>
            </div>
        </form>
    )
}

/* --------------------------------Export--------------------------------*/

export default SignUp
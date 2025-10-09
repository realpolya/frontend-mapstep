/* --------------------------------Imports--------------------------------*/

import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import AuthContext from "./AuthContext.jsx"

import services from '../services/index.js';

/* --------------------------------Component--------------------------------*/

const AuthProvider = ({ children }) => {

    const navigate = useNavigate()

    const [user, setUser] = useState(null)

    const handleSignIn = data => {
        setUser(data)
    }

    const logOut = async () => {

        await services.signOut()
        setUser(null)
        navigate("/")
        // window.location.reload()
        
    }

    const checkUserToken = async () => {

        const verified = await services.verifySession();

        if (verified) {
            // console.log("user is verified!")
            const user = await services.getUser()
            setUser(user)
            return
        } 

        setUser(null)

    }

    const setCsrf = async () => await services.createCsrf()


    useEffect(() => {

        setCsrf();
        checkUserToken();

    }, [])


    const authObject = { handleSignIn, user, 
        setUser, logOut
    }


    return (
       <AuthContext.Provider value={authObject}>
            {children}
        </AuthContext.Provider>
    )
}

/* --------------------------------Export--------------------------------*/

export default AuthProvider
/* --------------------------------Imports--------------------------------*/

import { createContext, useContext, useEffect, useState } from 'react';
// import { useLocation, useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


import services from '../services/index.js';


/* --------------------------------Context--------------------------------*/

const AuthContext = createContext(null);

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


const useAuth = () => {
    try {
        return useContext(AuthContext)
    } catch {
        return null
    }
}

/* --------------------------------Export--------------------------------*/

export default AuthProvider
export { useAuth }
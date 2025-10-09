/* --------------------------------Imports--------------------------------*/

import { createContext } from 'react';

/* --------------------------------Context--------------------------------*/

const AuthContext = createContext(null);

/* --------------------------------Component--------------------------------*/

const useAuth = () => {
    try {
        return useContext(AuthContext)
    } catch {
        return null
    }
}

/* --------------------------------Export--------------------------------*/

export default AuthContext
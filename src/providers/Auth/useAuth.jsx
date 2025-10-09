/* --------------------------------Imports--------------------------------*/

import { useContext } from 'react';

import AuthContext from './AuthContext.jsx';

/* --------------------------------Component--------------------------------*/

const useAuth = () => {
    try {
        return useContext(AuthContext)
    } catch {
        return null
    }
}

/* --------------------------------Export--------------------------------*/

export default useAuth
/* --------------------------------Imports--------------------------------*/

import { useContext } from 'react';
import { Navigate } from 'react-router-dom';

import { AppContext } from '../App.jsx';

/* --------------------------------Component--------------------------------*/

const ProtectedRoute = ({ children }) => {

    const { user } = useContext(AppContext)
    const isAuthenticated = !!user // FIXME: might cause issues with await / async



    return isAuthenticated ? children : <Navigate to="/" replace />

}

/* --------------------------------Export--------------------------------*/

export default ProtectedRoute